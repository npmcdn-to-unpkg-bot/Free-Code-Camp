# Git

Is a version control system which takes snapshots over time. You work non-linearly by mirroring copies of the repository and can work offline easily. 
[workflow](https://gist.github.com/hofmannsven/6814451)  
### Getting Started

##### create a new repository on the command line
```javascript
echo "# helloWorld" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/jchimienti89/helloWorld.git
git push -u origin master
```

##### push an existing repository from the command line
```javascript
git remote add origin https://github.com/jchimienti89/helloWorld.git
git push -u origin master
```
 

  
  #### Three States:  
  1. Committed 
    - data safely stored in local database  
    2. Modified   
    3. Staged 
      -  marked modified file to go into next commit snapshot
      #### Initialize new Repository:
      ```javascript
      Git add -all adds files, removes files
      git add . // adds all files in dir (including newly created files)
      Git add -u // removes deleted files 

      git commit -a -m “my message” // where a updates modified and deleted files and m is a message. 
      git push
      ```
      #### Clone Repository (work on other’s projects):
      `git clone [url] [renamed directory]`
       
       `git status  –s[hort] // more readable output`
        
	provide login info when using http while cloning to ensure it won't be needed every push:
	 
	 `git config`
	  
	  `git config remote.origin.url https://{USERNAME}:{PASSWORD}@github.com/{USERNAME}/{REPONAME}.git`
	   
	   ### Pulling v Fetching and Merging
	   ####Pull:  
	    >Bring changes into my code!

	    will automatically merge commits and brings branch up to date with remote while also updating other remote-tracking branches.   
	    ####Fetch:
	    > Bring local copy up to date.   

	    gathers commits from target branch that doesn't exist and stores them. Does not merge. Useful if you need to keep repro up to date but updating might break file.   
	     
	     ### Compare and Logging Changes
	      
	       
	       Logging changes:  
	       `git log --pretty=format:"%h %ad | %s%d [%an]" --graph --date=short`  
	       result:  
	       ```javascript
	       * fa3c141 2011-03-09 | Added HTML header (HEAD, master) [Alexander Shvets]
	       * 8c32287 2011-03-09 | Added standard HTML page tags [Alexander Shvets]
	       * 43628f7 2011-03-09 | Added h1 tag [Alexander Shvets]
	       * 911e8c9 2011-03-09 | First Commit [Alexander Shvets]
	       ```


	       `git log`
	       One of the more helpful options is -p, which shows the difference introduced in each commit. You can also use -2, which limits the output to only the last two entries. –stat shows abbreviated stats (# of insertions, deletions, and modifications)
	        
		`git log –pretty=oneline | short | full | fuller`
		 
		 | command           | filter  |
		 |-------------------|----------------------------------------------------------------------|
		 | -(n)              | Show only the last n commits                                         |
		 | --since, --after  | Limit the commits to those made after the specified date             |
		 | --unitl, --before | limit the commits to theose made before the specified date           |
		 | --author             | only show commits in which the author entry matches specified string |
		 | --committer       | only show commits in which committer entry matches specified string  |
		 | --grep            | only show cimmmits with a commit message containing the string       |
		 | -S                | only show commits adding or removing code matching the string        |  



		 ###  Branches
		 Create new branch and cd into:
		 `git checkout -b <name>  `   

		 New Branch:  
		 `Git branch <name>`  
		 Switch to Branch:  
		 `Git checkout <branch>`  




		 ** Be Careful**  It’s important to note that when you switch branches in Git, files in your working directory will change. If you switch to an older branch, your working directory will be reverted to look like it did the last time you committed on that branch. If Git cannot do it cleanly, it will not let you switch at all.


		 #### Rebasing

		 In Git, there are two main ways to integrate changes from one branch into another: the **merge and the rebase**. 

		 #### Basic Rebase:

		 `git merge`  
		 example:  
		 Before git merge:
		 ![alt text](https://git-scm.com/book/en/v2/book/03-git-branching/images/basic-rebase-1.png)
		 After merge:
		 ![alt text](https://git-scm.com/book/en/v2/book/03-git-branching/images/basic-rebase-2.png)


		 However, there is another way: you can take the patch of the change that was introduced in C4 and reapply it on top of C3. In Git, this is called **rebasing**. With the rebase command, you can take all the changes that were committed on one branch and replay them on another one.

		 **The Perils of Rebasing**  
		 Ahh, but the bliss of rebasing isn’t without its drawbacks, which can be summed up in a single line:

		 ####Do not rebase commits that exist outside your repository.

		 In this example, you’d run the following:
		 ```javascript
		 $ git checkout experiment
		 $ git rebase master
		 First, rewinding head to replay your work on top of it...
		 Applying: added staged command
		 ```

		 At this point, you can go back to the master branch and do a fast-forward merge.
		 ```javascript
		 $ git checkout master
		 $ git merge experiment
		 ```

		 ![alt text](https://git-scm.com/book/en/v2/book/03-git-branching/images/basic-rebase-4.png)

		 **There is no difference in the end product of the integration, but rebasing makes for a cleaner history. **


		 ![alt text](https://git-scm.com/book/en/v2/book/03-git-branching/images/basic-rebase-3.png )



		 Now, the snapshot pointed to by C4' is exactly the same as the one that was pointed to by C5 in the merge example. There is no difference in the end product of the integration, but rebasing makes for a cleaner history. If you examine the log of a rebased branch, it looks like a linear history: it appears that all the work happened in series, even when it originally happened in parallel.

		  `$ git rebase --onto master server client`
		  This basically says, “Check out the client branch, figure out the patches from the common ancestor of the client and server branches, and then replay them onto master.” It’s a bit complex, but the result is pretty cool.
		  ![alt text](https://git-scm.com/book/en/v2/book/03-git-branching/images/interesting-rebase-2.png )
		  Next, try to make each commit a logically separate changeset. If you can, try to make your changes digestible – don’t code for a whole weekend on five different issues and then submit them all as one massive commit on Monday. Even if you don’t commit during the weekend, use the staging area on Monday to split your work into at least one commit per issue, with a useful message per commit. If some of the changes modify the same file, try to use git add --patch to partially stage files (covered in detail in Interactive Staging).
		   
		    **reverting**

		    `git revert HEAD~3`
		    Revert the changes specified by the fourth last commit in HEAD and create a new commit with the reverted changes.
		    `git revert -n master~5..master~2`
		    Revert the changes done by commits from the fifth last commit in master (included) to the third last commit in master (included), but do not create any commit with the reverted changes. The revert only modifies the working tree and the index.

		     
		      
		      ### Undoing things / amending files:

		      #### Reversing changes to files
		      reset = revert w/o logging
		      ##### Specific file removal (unstaged) :  
		      `git checkout /path/to/file`  
		      ##### Remove all unstaged files:  
		      `git checkout -- . //note: -- indicates on current branch`  
		      **if committed:**    
		        `git revert HEAD`   
			##### Unstage a file:  
			`git reset HEAD <file>`  

			   

			   Compare against unstaged:  
			   `git diff <file>`  
			     to compare against last commit:    
			     `git diff --staged |  --cached //(staged and cached are synonyms).`    
			     for colored output file:  
			     `git diff a.csv b.cs > date_compare.diff `  
			      
			      Be careful, because you can’t always undo some of these undos. This is one of the few areas in Git where you may lose some work if you do it wrong.
			       
			       To untrack every file that is now in your .gitignore:
			       First commit any outstanding code changes, and then, run this command:  
			       `git rm -r --cached .`  
			       This removes any changed files from the index(staging area), then just run:  
			       `git add .`  
			       Commit it:  
			       `git commit -m ".gitignore is now working"`  
			        
				 **amending commits**  
				 `git commit --amend`  
				  example:  
				  ```javascript
				  git commit -m "post"
				  git add forgottenFile.js
				  git commit --amend
				  ```
				   
				   `$ git rm log/\*.log`  

				   Note the backslash (\) in front of the *. This is necessary because Git does its own filename expansion in addition to your shell’s filename expansion. This command removes all files that have the .log extension in the log/ directory. Or, you can do something like this:
				    
				    `$ git rm \*~`  
				    This command removes all files whose names end with a ~.  

				    #### move / rename files
				     
				     `git mv file_from file_to`

				     #### Tagging 
				     can merge files via tags and generally easier to work with.  
				     ** sharing tags **    
				     Note: git push doesn’t transfer tags and will have to explicitly push tags. Run:  
				     `git push origin [tagname] git push origin --tags`  
				     **displaying tags**  
				     `git show v1.4`  


				     ```javascript
				     // mark a commit with a tag
				     $ git tag v4 
				     // switch to master branch and merge via tag
				     $ git checkout master 
				     $ git merge v4
				     ```

				     ```javascript
				     $ git tag -a v1.4 -m "my version 1.4"
				     $ git tag // list of all tags 
				     v0.1
				     v1.3
				     V1.4
				     ```
				     ##### Aborting merge:
				     `git merge --abort`  


				     ####cat:
				     [use of cat command](http://www.cyberciti.biz/faq/howto-use-cat-command-in-unix-linux-shell-script/)  
				      
				      It can be used for the following purposes under UNIX or Linux:  

				      1. Display text files on screen
				      1. Copy text files.
				      1. Combine text files.
				      1. Create new text files.
				       

				       ##### Concatenate files
				       ```javascript
				       cat filename
				       cat options filename
				       cat file1 file2
				       cat file1 file2 > newcombinedfile
				       ```
				        
					 
					 #### Aliases

					  you can easily set up an alias for each command using git config.Here are a couple of examples you may want to set up:
					  ```javascript
					  $ git config --global alias.co checkout
					  $ git config --global alias.br branch
					  $ git config --global alias.ci commit
					  $ git config --global alias.st status
					  ```


					  	
						#### Globals and misc tips
						On a x86 system
						```javascript
						$ git config --global core.editor "'C:/Program Files/Notepad++/notepad++.exe' -multiInst -nosession"
						On a x64 system
						$ git config --global core.editor "'C:/Program Files (x86)/Notepad++/notepad++.exe' -multiInst -nosession"
						```
						 
						  Don’t type your password every time

						  `git config --global credential.helper cache`


						  ##### Check Settings:
						   
						   `git config --list`
						   ##### your name and email address
						   ```javascript

						   $ git config --global user.name "Alvin Alexander"
						   $ git config --global user.email YOUR-EMAIL-ADDRESS
						   ```
						   ##### more optional git config stuff
						   ```javascript
						   $ git config --global core.editor vim
						   $ git config --global merge.tool vimdiff
						   `git remote add origin <url>`

						   ```














