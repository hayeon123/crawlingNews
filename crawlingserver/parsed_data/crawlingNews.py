import requests
from bs4 import BeautifulSoup

URL="http://www.dt.co.kr/section.html?section_num=2000"
import os
# Python이 실행될 때 DJANGO_SETTINGS_MODULE이라는 환경 변수에 현재 프로젝트의 settings.py파일 경로를 등록합니다.
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "crawlingserver.settings")
# 이제 장고를 가져와 장고 프로젝트를 사용할 수 있도록 환경을 만듭니다.
import django
django.setup()

from .models import Post

# def get_title(html):
#     title = html.find("dt",{"class":"tit"}).find("a")
#     print(title.get_text());

def get_one(html, index):
    title =html.find("dt", {"class":"tit"}).find("a").get_text()
    desc = html.find("dd",{"class": "desc"}).find("a").get_text()

    #print(title, desc)
    data = {}
    data['id'] = index
    data['title'] = title
    data['desc'] = desc
    return data

def get_alticles():
    news_result = requests.get(URL)
    news_result.encoding='euc-kr'
    soup = BeautifulSoup(news_result.text, "html.parser")
    results = soup.find_all("dl", {"class": "article_list"})

    news = []
    index = 0
    for result in results:
        news.append(get_one(result, index))
        index += 1
    return news

def get_Image():
    Image_URL ="http://www.dt.co.kr/"
    news_result= requests.get(Image_URL)
    news_result.encoding='euc-kr'
    soup = BeautifulSoup(news_result.text,"html.parser")
    result = soup.find("div",{"class":"main_art_photo"})

    img_src = result.find("img").get("src")
    print("result", img_src)
    # print(img_src)
    return img_src

if __name__=='__main__':
    print(get_alticles())
    print(get_Image())