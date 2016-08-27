[intro video](https://www.youtube.com/watch?v=rfl9KQb_HVk)

[vim commands](http://www.fprintf.net/vimCheatSheet.html)  
[cheat sheet](http://www.viemu.com/vi-vim-cheat-sheet.gif)  

## Quick Start
#### new file:
`vim hello-world.txt`
#### insert text
`i` to insert text while in file.  
#### to quit file:  
press `esc` then `:wq [<name>]` to save file w/ optional filename  
press `:q!` to quit without saves. 

## Pretty output

save a `.vimrc` file.  
example:  
`set ruler laststatus=2 number title hlsearch syntax on`  

[example .vimrc file](http://amix.dk/vim/vimrc.html)  
create vimrc file in home folder. `~/.vimrc`  

`:echo($MYVIMRC)`  
gives location of .vimrc file.  
`:e $MYVIMRC`
will open it. 
# TODO: ADD SCENARIO AND WORKING EXAMPLE 

### Vimium Chrome Extension
