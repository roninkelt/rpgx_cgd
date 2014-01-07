---
layout: post
title: "Contributing rules"
description: "we want to help"
category: "tutorial"
tags: [beginner, contribute, tutorial]
---
{% include JB/setup %}

#Contributing to the RPG Crossing Community Game  Design Project

There are a couple of ways to do this, first and simplest - type up a proposed rule on the forum and submit it for discussion.  Second, pull down the repository, type up some rules material and when you are done, commit your changes then point to the repository in your forum post. Third is much like the second, but in addition, you format the pages using markdown so it's nice and pretty and easy to read.  This article is going to show you how to do the third, but also includes instructions for the second option.  The reason I've created this page is that it's much easier to add rules material that already exists in the repository to the official ruleset.

##Start Jekyll 

I need to have added your public key (.ppk) in order for this to work.  Don't start before I reply to your email.

If you want to fully format and view pages locally before pushing them, start here, otherwise skip to ***Step 3***


1. Clone the repository once I've added you. If you've already done this skip it, it only needs to be done once.

    1. Start Sourcetree  
    1. Clone/New from the toolbar - 
    2. Source path/ url: git@github.com:roninkelt/rpgx_cgd.git
    3. Destination is likely to be somewhere in your Documents library  

1a. Start Sourcetree and Pull the latest version of the repository using the toolbar. 

1. If this is your first contribution to the project, and you just downloaded the repository select the repository you want to edit and make a branch using the Branch toolbar button. Use your username for the branch name. 

2. If you already have a branch, double click to check it out for editing.

2. Run jekyll in a Terminal so you can see what changes you are making as you make them.

        >jekyll serve -w --host 127.0.0.1

6. In Sourcetree find the file namedleave this terminal. open and open another using the same toolbar Terminal button. create a new page. pagename should be the rule that you are creating 

        >rake post new="contribute/pagename"

7. edit this document which will be in Documents\'repositoryname'\_posts\'date-pagename'.md using your favorite text editor and when you are happy or done with your edits, save the file as a text file. If you want to use markdown to add headings, subheadings and links here is a cheatsheet - http://support.mashery.com/docs/customizing_your_portal/Markdown_Cheat_Sheet

7. be sure to update tags with at least [rules] and any other relevant tags you can think of [rules, basics, endurance] or [rules, combat] for example. Category should be rules for the most part.

8. repeat steps 5 and 6 and 7 as needed.

9. you can look at the pages you are editing by following this link - http://localhost:4000/ - if you have installed and run jekyll above.

9. when done editing - save the file and using Sourcetree - stage all the changes you made using the double up arrow in the file source tab. When you see your pages in the Staged Changes box, click on Add and then Commit in the toolbar.

10. type a short descriptive message in the commit box, be as wordy as you want, it helps find stuff later if there is a problem.

11. be sure to click on Push Commits Immediately to Origin then click on Commit.

12. You've made your first contribution to the project.  I'll be checking every day and merging rules in as they are discussed in the boards.

##Closing Thoughts

feel free to contact me directly at the rpgx boards, my username is roninkelt, email me roninkelt@yahoo.com or post in the [tech support thread](http://www.rpgcrossing.com/showthread.php?p=5927900).

{% comment %} <!--vim: set wrap ts=8 tw=0 fileencoding=utf-8 :--> {% endcomment %}
