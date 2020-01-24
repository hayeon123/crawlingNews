import requests
from bs4 import BeautifulSoup

URL="http://www.dt.co.kr/section.html?section_num=2000"


# def get_title(html):
#     title = html.find("dt",{"class":"tit"}).find("a")
#     print(title.get_text());

def get_one(html):
    title =html.find("dt", {"class":"tit"}).find("a").get_text();
    desc = html.find("dd",{"class": "desc"}).find("a").get_text();

    print(title, desc)
def get_alticles():
    news_result = requests.get(URL)
    news_result.encoding='euc-kr'
    soup = BeautifulSoup(news_result.text, "html.parser")
    results = soup.find_all("dl", {"class": "article_list"})

    for result in results:
        get_one(result)
