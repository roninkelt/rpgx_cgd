---
layout: post
category : lessons
tagline: "Installing Jekyll and getting it friendly with Compass on Windows 7"
tags : [intro, beginner, jekyll, compass, python, tutorial]
---
{% include JB/setup %}
# Installing Ruby, Python, Jekyll and Compass on Windows 7

## Step 1: Install Ruby

As of the time of this writing Ruby 1.9.3 is recommended for Windows 

1. Download and install the ruby installer from http://rubyinstaller.org/downloads/.
2. If you don't use the default directory, be sure to not have any spaces in install directory. I used c:\bin\Ruby193.

3. Select the Add Ruby executables to your PATH checkbox, so your windows PATH will be updated automatically.

3. Test that installation was successful.

        > ruby --version

## Step 2: Install Ruby Dev Kit
1. Download and install ruby dev kit from http://rubyinstaller.org/downloads/.
2. Unpack ruby dev kit installer (as before no spaces in the path - c:\bin\Ruby193-DevKit).
3. Add the dev kit, dev kit bin and dev kit mingw bin to your path - C:\bin\Ruby193-DevKit; c:\bin\Ruby193-DevKit\bin; c:\bin\Ruby193-DevKit\mingw\bin

4. Initialize Dev Kit

        > ruby dk.rb init

        [INFO] found RubyInstaller v2.0.0 at C:\bin\Ruby193

5. review and modify the auto-generated 'config.yml' file to ensure it contains the root directories to all of the installed Rubies you want enhanced by the DevKit.

6. Install Ruby Dev Kit

        > ruby dk.rb install


##Step 3: Install Jekyll gem

        >gem install jekyll --platform=ruby

##Step 4: Install rdiscount gem for markdown processing

        >gem install rdiscount --platform=ruby

##Step 5: Install Python

If you are going to use pygments for code highlighting, then you need to  install a compatible version of python (python 3 doesn't work). I used a portable version found here - http://portablepython.com/wiki/PortablePython2.7.5.1/

1. Once again I put it in C:\bin with no spaces in the path

1. Add c:\bin\Python275\App to the path

2. test python to see if it is properly installed.

        >python --version

##Step 6: Install Easy Install

1. Get the setup tool - https://pypi.python.org/pypi/setuptools#windows.
2. Run the setup file from the directory you downloaded it to.

        > python ez_setup.py

3. Add C:\bin\Python275\App\Scripts to your PATH.

4. Test easy_install to see if it is working

        >easy_install --help

##Step 7: Install Pygments

        > easy_install Pygments

1. you will likely get too new a version of pygments (it has to be 0.5.0 currently)

        >gem uninstall pygments.rb

        >gem install pygments.rb --version "=0.5.0" --platform=ruby

##Step 8: install compass

1. install compass gem

        >gem install compass

##Step 9: initialize Jekyll 

        >jekyll new c:\path\to\site

        >chdir c:\path\to\repository

##Step 10. initialize Compass 

1. create a Compass instance within your existing site directory. From the site directory, run this command from terminal:

        >compass create .

2. tweaks to make the default Compass files and folders work.

  * Rename the sass folder to be \_sass
  * Delete the stylesheets folder that Compass created (for now well use Jekylls default css folder for our CSS)
  * Move your Compass config.rb file into the \_sass folder
  * Create a folder \_plugins in your root Jekyll directory, and paste the contents of [ this gist ]( https://gist.github.com/davidpots/5853188 ) into  \_plugins/generator_scss.rb.

3. edit \_sass/config.rb so Compass knows where to find everything within the Jekyll heirarchy. Make your \_sass/config.rb file look like this:

        http_path = "/"
        sass_dir = "./"
        css_dir = "../css"
        images_dir = "../img"
        javascripts_dir = "../js"
        relative_assets = true

4. edit \_layouts/default.html and add this line:

        <!-- SCSS, baby -->
        <link rel="stylesheet" href="/css/screen.css">

##Step 11: start Jekyll

        >jekyll serve --watch

That should do the trick. Now you are ready to go. Now when you edit a page, template, scss or anything, Jekyll will rebuild the pages in \_site

Open http://localhost:4000/ to see your site.

##Post Script:

I use ampps (http://www.ampps.com/) to do my local full stack development on so if you decide to do it that way just add a link from your ampps www directory to the _site directory of your just created project. 

        >mklink /D c:\Users\Public\Documents\www c:\Path\to\site\_site

also since I'm not using jekyll to serve my site, I use the following command instead of jekyll serve

        >jekyll build --watch

same effect - jekyll builds pages on the fly, but there is no html server running on port 4000.


## Next Steps

Please take a look at [{{ site.categories.api.first.title }}]({{ BASE_PATH }}{{ site.categories.api.first.url }})
or jump right into [Usage]({{ BASE_PATH }}{{ site.categories.usage.first.url }}) if you'd like.
