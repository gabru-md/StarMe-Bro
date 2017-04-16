from selenium import webdriver
import time

browser = webdriver.Chrome("D:\chromedriver")
def StarMeBro():
	browser.get("https://github.com")

	script = """
	var username = "botify99"
	var i = Math.floor(Math.random() * 10000)
	document.getElementById("user[login]").value = username + i
	document.getElementById("user[email]").value = "botify99" + i + "@blabla.com"
	document.getElementById("user[password]").value = "zomatoeater123"
	document.getElementsByTagName("button")
	document.getElementsByTagName("button")[1].click() 
	"""

	browser.execute_script(script)

	#time.sleep(500)


	browser.get("https://github.com/gabru-md/StarMe-Bro")


	script = """
	document.getElementsByTagName("button")
	document.getElementsByTagName("button")[3].click()
	"""
	browser.execute_script(script)

	#time.sleep(200)

	script = """
	document.getElementsByClassName("dropdown-caret")
	document.getElementsByClassName("dropdown-caret")[1].click()
	"""
	browser.execute_script(script)

	#time.sleep(100)

	script = """
	document.getElementsByTagName("button")
	document.getElementsByTagName("button")[0].click()
	"""

	browser.execute_script(script)

if __name__ == "__main__":
	for i in range(200):
		StarMeBro()