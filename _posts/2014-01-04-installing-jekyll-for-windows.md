---
layout: post
title: "Installing Jekyll for windows"
description: "A little more difficult than Linux"
category: "tutorial"
tags: [beginner, jekyll, python, ruby, tutorial]
---
{% include JB/setup %}

# Installing Ruby, Python, Jekyll on Windows 7

## Step 1: Install Ruby

As of the time of this writing Ruby 1.9.3 is recommended for Windows 

1. Download and install the ruby installer from http://rubyinstaller.org/downloads/.
2. If you don't use the default directory, be sure to not have any spaces in install directory. I used c:\bin\Ruby193.

3. Select the Add Ruby executables to your PATH checkbox, so your windows PATH will be updated automatically.

3. Open a cmd prompt and test that installation was successful.

        > ruby --version

## Step 2: Install Ruby Dev Kit
1. Download and install ruby dev kit from http://rubyinstaller.org/downloads/.
2. Be sure to get the dev kit for the version of Ruby that you installed in step 1.
3. Unpack ruby dev kit installer (as before no spaces in the path - c:\bin\Ruby193-DevKit).
4. Add the dev kit, dev kit bin and dev kit mingw bin to your path - C:\bin\Ruby193-DevKit; c:\bin\Ruby193-DevKit\bin; c:\bin\Ruby193-DevKit\mingw\bin

        > setx PATH "%PATH%; C:\bin\Ruby193-DevKit; c:\bin\Ruby193-DevKit\bin; c:\bin\Ruby193"

5. Restart cmd and initialize Dev Kit

        > ruby dk.rb init

        [INFO] found RubyInstaller v2.0.0 at C:\bin\Ruby193

6. review and modify the auto-generated 'c:\bin\Ruby193-DevKit\config.yml' file to ensure it contains the root directories to all of the installed Rubies you want enhanced by the DevKit.

7. Install Ruby Dev Kit

        > ruby dk.rb install


##Step 3: Install Ruby gems

        >gem install bundler --platform=ruby
        >gem install rdiscount --platform=ruby

##Step 4: Install Python

If you are going to use pygments for code highlighting, then you need to  install a compatible version of python (python 3 doesn't work). I used a portable version found here - http://portablepython.com/wiki/PortablePython2.7.5.1/

1. Once again I put it in C:\bin with no spaces in the path

2. Add c:\bin\Python275\App to the path

        >setx PATH "%PATH%; c:\bin\Python275\App"

2. Restart cmd and test python to see if it is properly installed.

        >python --version

##Step 5: Install Easy Install

1. Get the setup tool - https://pypi.python.org/pypi/setuptools#windows.
2. Run the setup file from the directory you downloaded it to.

        > python ez_setup.py

3. Add C:\bin\Python275\App\Scripts to your PATH.

        >setx PATH "%PATH%; C:\bin\Python275\App\Scripts" 

4. Test easy_install to see if it is working

        >easy_install --help

##Step 6: Install Pygments

          > easy_install Pygments

  1. you will likely get too new a version of pygments (it has to be 0.5.0 currently)

        >gem uninstall pygments.rb

        >gem install pygments.rb --version "=0.5.0" --platform=ruby

##Step 7: install and set up sourcetree 

1. Download and install sourcetree from http://www.sourcetreeapp.com/

2. Set up sourcetree using the wizard File > Setup Wizard...

    1. We won't be using Mercurial, so just tell the wizard that.
    2. enter a username and email that you will be using for submissions
    3. use PuTTY/plink instead of OpenSSH
    4. enter your github id and password (making an account is free at github.com)

3. Set up an SSH key Tools > Create or Import an SSH Key

    1. Set Parameters to SSH-2 RSA and set the number of bits to 2048
    2. Actions / Generate a Key
    3. Set key comment to your email address
    4. Set a Key Passphrase if you want (not recommended in this instance)
    5. Save the Public Key someplace (recommend putting it in c:\Users\'username'\ssh) - call the file 'username'\_github.pub_key
    6. Save the Private Key in the same directory - 'username'\_github.ppk
    7. email the pub_key file to roninkelt@yahoo.com so I can add you as a contributor.
    8. add the key to your key manager Tools > Launch SSH Agent
        1. In the lower right of your Toolbar click to show hidden icons
        2. Right click View Keys for Pageant (the icon looks like a monitor wearing a hat)
        3. Add Key
        4. Open the .ppk file you just emailed.
        5. Close Pageant
    9. I'll email you when your key has been added.

4. Clone the repository once I've added you.

    1. Clone/New from the toolbar - 
    2. Source path/ url: git@github.com:roninkelt/rpgx_cgd.git
    3. Destination is likely to be somewhere in your Documents library  

##Step 8: set up and start Jekyll

1. If this is your first contribution to the project, and you just downloaded the repository select the repository you want to edit and make a branch using the Branch toolbar button. Use your username for the branch name. 

2. If this isn't your first contribution or it's been a while since you've cloned the repository, click on Pull on the toolbar and then select the branch with your username. Skip to step 5.

3. in Sourcetree, open a Terminal using the toolbar.

4. install the correct environment for jekyll.

        >bundle install

    or if you didn't install bundler above

        >gem install github-pages

5. run jekyll in a terminal so you can see what changes you are making as you make them.

        >jekyll serve -w --host 127.0.0.1

6. leave this terminal open and open another using the same toolbar Terminal button. create a new page. pagename should be the rule that you are creating 

        >rake post new="pagename"

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
