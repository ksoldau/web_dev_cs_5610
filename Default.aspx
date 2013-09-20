<%@ Page Language="C#" %>

<script runat="server">
    <%-- This demo page has no server side script --%>
</script>

<!DOCTYPE html>

<html lang="en">

<head>

<meta charset='utf-8' />

<title>Katie Soldau CS5610</title>
<link rel="stylesheet" type="css/text" href="css/homepage.css" />
<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,600' rel='stylesheet' type='text/css'>


<style type="text/css">
    ul.master_navigation
    {
        font-size: 100%;
        font-weight: bold;
        text-align: center;
        list-style: none;
        margin: 10px 0; /* I cahnged it from 0.5em 0 */
        padding: 0;
    }

    ul.master_navigation li
    {
        display: inline-block;
        padding: 0 0.5%;
    }

    a
    {
        color: #FFF; /*I changed it from #08f*/
        font-weight: bold;
        text-decoration: none;
    }

    a:visited
    {
        color: #88f;
    }

    a:hover
    {
        color: #FF712C; /* I changed from f00 */
    }

    p
    {
        text-align: justify;
    }
</style>

<style type="text/css" media="screen">
    body {
        width:900px;
        max-width: 100%;
        margin: 0 auto; /* I added in the auto */
        padding: 0;
    }

    .pad {
        /*padding: 10px; I commented this out */
    }
</style>

</head>

<body>

<div class="pad">

<form id="form1" runat="server">

<header>
<a href="Default.aspx" id="page-title"><h1>Katie Soldau CS5610</h1></a>
<div>

<ul class="master_navigation">
    <li><a href="experiments/" target="_blank">Experiments</a></li>
    <li><a href="sitestatistics/" target="_blank">SiteStatistics</a></li>
    <li><a href="statistics/" target="_blank">Statistics</a></li>
    <li><a href="source/" target="_blank">Source</a></li>
    <li><a href="search/" target="_blank">Search</a></li>
    <li><a href="searchtree/" target="_blank">SearchTree</a></li>
    <li><a href="textview/" target="_blank">TextView</a></li>
    <li><a href="filelist.aspx" target="_blank">FileList</a></li>
    <li><a href="autofile.aspx" target="_blank">AutoFile</a></li>
    <li><a href="images/autoimage.aspx" target="_blank">Images</a></li>
    <li><a href="blog/" target="_blank">Blog</a></li>
</ul>
</header>

<p>
Hello, my name is Katie Soldau. I'm from New Hampshire and am currently an undergraduate in my third year. I'm dual majoring in Computer Science and Interactive Media and minoring in Film Production.
I am interested in Web Development, User Interface Development, and Software Development. In general, I am a big fan of combining the areas of art and technology.
</p>

<img src="images/bio_picture.jpeg" id="bio_picture">

<p>
In CS 5610 I hope to learn about all aspects of Web Development. 
I worked as a web developer intern this summer at a small company in Boston.
At that internship I worked with the Ruby on Rails framework, so much of my knowledge base extends around that. 
Current knowledge:
<ul>
<li>basic HTML, CSS, jQuery, JavaScript</li>
<li>barely anything about databases</li>
<li>a little about the MVC pattern</li>
<li>a little about controllers</li>
<li>a little about various aspects of full-stack development</li>
</ul>
I hope to greatly expand on my knowledge and become more comfortable with building dynamic websites by the end of this course.
</p>

<hr class="clear-float"/> 

<p><h2>Project</h2>I have not completely made up my mind, but for my project I might build something that deals with recipes. I'm a little interested in building a site that allows you to save recipes you like, easily sort through these recipes, and find recipes based on the ingredients you have available.</p>

<hr />
<h2> Links I don't want to lose yet: </h2>
    

<p>
Here is a link to the
<a href="story/index.htm" target="_blank">Story Utility</a>
on this site so that you may explore this tool.
</p>

<p>
Here is a link to the
<a href="http://www.northeastern.edu/rasala/webstories.htm"
        target="_blank">Web Development Stories</a>
so that you may see a good collection of online documentation.
</p>

<p>
This provides a model for using stories for documentation and
for collections of experiments.
</p>

<hr />

</div>

</form>

</div>

</body>
</html>
