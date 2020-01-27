import requests
from bs4 import BeautifulSoup

URL="http://www.dt.co.kr/section.html?section_num=2000"
import os
# Python이 실행될 때 DJANGO_SETTINGS_MODULE이라는 환경 변수에 현재 프로젝트의 settings.py파일 경로를 등록합니다.
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "crawlingserver.settings")
# 이제 장고를 가져와 장고 프로젝트를 사용할 수 있도록 환경을 만듭니다.
import django
django.setup()

# def get_title(html):
#     title = html.find("dt",{"class":"tit"}).find("a")
#     print(title.get_text());

def get_one(html):
    title =html.find("dt", {"class":"tit"}).find("a").get_text()
    desc = html.find("dd",{"class": "desc"}).find("a").get_text()

    print(title, desc)
def get_alticles():
    news_result = requests.get(URL)
    news_result.encoding='euc-kr'
    soup = BeautifulSoup(news_result.text, "html.parser")
    results = soup.find_all("dl", {"class": "article_list"})

    for result in results:
        get_one(result)
