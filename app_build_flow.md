when you starting buliding an application, It's very handy to work with local
file or mocked data before hitting remote api or other source

1. dataSource design: how our dataSource will look like?
2. import and used sourcedata
3. use static template coming from design or to use a theme from online
   marketplace
4. build up the first page of our forum, the homepage PAGE as prefix grouping
   all future compoents that will represent separate pages PageLogin,
5. user will not load the css contain class like post-item, post-list, when they
   visit login page
# refactor: deliccated router configruation file, job responsibility
   export the router we create
   import in main.js 
   install it in our application
   file-less module sepcifier since the file we import is index.js 
# in homepage page, concern about homepage use to display list of threads

# refactor ThreadList page to be more resuable
   decouple the source data from components, accpet it as porps
   threads to display vs all threads in data.json file

# link the list item within a threadList page
   link the thread item to ThreadShow page
   <!-- UI -->
   expect interaction:
   when user click a thread, they ger reidrect to the thread

# display an error page when try to navigate to page that doesn't exist

# display error page when thread seems to not exist
user interaction: naviagate to thread page with invalid thread id
UI: not found page
solution:
   redirect to PageNotFount when user try to visit thread page with invalid thread Id
   but preserve url path, queyr, hash for error fix
   v-if/v-else
   pre rotute gurad redirect
# refacor: organize the page/route/view compoennt to delicated directory
   component import speicficer use @ for future refactor
   quick navigate to compoenent in editor by providing part of its name

# refactor: page compoennet light-weight
split display list of post into components
solution:
1. post-list component to accpet the id of thread and then it will be responsible for finding the posts in our data source and diaplaying them
2. just pass the posts(threadPosts) it need, and 
post lists will only be responsible for displaying the given posts
more reusable for if we wanna display lists of post realted to user not thread

# feature: add new post


# bulid forum page
route configuration
UI composition
prepare our data for this page
caller side(consumer) use -> pass ->recevie->implement(producer) user
replace static html with data in data source