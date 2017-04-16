// this will be my STAR BOI :P


// THE id(s) will be like id1 id2 id3 .... i.e. : qwertyu1 qwertyu2 etc so that it will be easy for me
// to report to github about this issue and they can easily resolve this.

// this prompte the browser to open GITHUB on the current tab

window.location.href = "https://github.com"
// filling in the name field in the browser window!
document.getElementById("user[login]").value = "abrakadabra123" // this is just a name this can be anything
// filling in the EMAIL field in the browser window!
document.getElementById("user[email]").value = "abrakadabra123@blabla.com" // this is just an EMAIL and can be anything
// filling in the Password field in the browser window! 
document.getElementById("user[password]").value = "zomatoeater" // this is a password that i will use as a common password for a ids
// this action will click the register button ! so that my BOT can register!
document.getElementsByTagName("button") // IDK why but it is necessary to first load all elements having "button"
// maybe because every time the page refreshes or goes into next page it wants me to reload the set of all elements as "button"

document.getElementsByTagName("button")[1].click() 

// this will take it to my repository StarMe-Bro that will further help me to get STARS onto it.

window.location.href = "https://github.com/gabru-md/StarMe-Bro"

document.getElementsByTagName("button") // loading the star button this time

document.getElementsByTagName("button")[3].click() // I already know that the button will be listed in 3rd index of the array
// this button is clicked to STAR my StarMe-Bro Repository!

// Now we will try to make a logout schema out of this shit
// now we will click the profile FAVICON :P to open up the profile side-menu and log out of it 
// we already know the class name of the CLASS in which this is stored

document.getElementsByClassName("dropdown-caret") //  just for the sake that i am supposed to do this everytime before handling the list

document.getElementsByClassName("dropdown-caret")[1].click()

// now we will load the buttons just for gawd's sake! so that i can again manipulate the buttons list to get access to the SignOut button
document.getElementsByTagName("button")

// now we finally log out of this shit 
document.getElementsByTagName("button")[0].click()


