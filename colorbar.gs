***************************************************************************************
*       $Id: colorbar.gs,v 1.15 2015/07/27 20:51:23 bguan Exp $
*       Copyright (c) 2010-2015, Bin Guan.
*       Distributed under GNU General Public License.
*
*---------begin original documentation from cbarn.gs---------
*  Script to plot a colorbar
*
*  The script will assume a colorbar is wanted even if there is 
*  not room -- it will plot on the side or the bottom if there is
*  room in either place, otherwise it will plot along the bottom and
*  overlay labels there if any.  This can be dealt with via 
*  the 'set parea' command.  In version 2 the default parea will
*  be changed, but we want to guarantee upward compatibility in
*  sub-releases.
*
*
*       modifications by mike fiorino 940614
*
*       - the extreme colors are plotted as triangles
*       - the colors are boxed in white
*       - input arguments in during a run execution:
* 
*       run cbarn sf vert xmid ymid
*
*       sf   - scale the whole bar 1.0 = original 0.5 half the size, etc.
*       vert - 0 FORCES a horizontal bar = 1 a vertical bar
*       xmid - the x position on the virtual page the center the bar
*       ymid - the x position on the virtual page the center the bar
*
*       if vert,xmid,ymid are not specified, they are selected
*       as in the original algorithm
*---------end original documentation from cbarn.gs---------
***************************************************************************************
function colorbar(arg)
*
* Draw color bar for current plot.
*
posANDoffset=subwrd(arg,1)
sf=subwrd(arg,2)
if(posANDoffset='-h')
usage()
return
endif
if(posANDoffset=''); posANDoffset='bottom'; endif
if(sf=''); sf=1.0; endif

*
* extract position/offset info
*
pos=posANDoffset
offset=0
outstr1=split(posANDoffset,'+','head')
outstr2=split(posANDoffset,'+','tail')
if(outstr2!='')
  pos=outstr1
  offset=outstr2
endif
outstr1=split(posANDoffset,'-','head')
outstr2=split(posANDoffset,'-','tail')
if(outstr2!='')
  pos=outstr1
  offset=outstr2
endif

if(pos='left' | pos='right'); vert=1; endif
if(pos='top' | pos='bottom'); vert=0; endif

'query gxinfo'
line3=sublin(result,3)
line4=sublin(result,4)
x1=subwrd(line3,4)
x2=subwrd(line3,6)
y1=subwrd(line4,4)
y2=subwrd(line4,6)
xsiz=x2-x1
ysiz=y2-y1
xmid=(x1+x2)/2
ymid=(y1+y2)/2
spacing=0.3

stroff=0.05*sf
strxsiz=0.10*sf
strysiz=0.11*sf

*
*  Check shading information
*
'query shades'
shadinfo=result
if(subwrd(shadinfo,1)='None') 
usage()
return
endif
cnum=subwrd(shadinfo,5)

*
* Right bar
*
if(pos='right')
xwid=0.2*sf
xl=x2+spacing+offset
xr=xl+xwid
ywid=ysiz*sf/cnum
yb=ymid-ysiz*sf/2
yt=ymid+ysiz*sf/2
'set string 1 l'
endif

*
* Left bar
*
if(pos='left')
xwid=0.2*sf
xr=x1-spacing+offset
xl=xr-xwid
ywid=ysiz*sf/cnum
yb=ymid-ysiz*sf/2
yt=ymid+ysiz*sf/2
'set string 1 l'
endif

*
* Bottom bar
*
if(pos='bottom')
ywid=0.2*sf
yt=y1-spacing+offset
yb=yt-ywid
xwid=xsiz*sf/cnum
xl=xmid-xsiz*sf/2
xr=xmid+xsiz*sf/2
'set string 1 tc'
endif

*
* Top bar
*
if(pos='top')
ywid=0.2*sf
yb=y2+spacing+offset
yt=yb+ywid
xwid=xsiz*sf/cnum
xl=xmid-xsiz*sf/2
xr=xmid+xsiz*sf/2
'set string 1 tc'
endif

*
* Plot colorbar
*
*---------begin original code from cbarn.gs---------
*'set strsiz 'strxsiz' 'strysiz
  num = 0
  while (num<cnum) 
    rec = sublin(shadinfo,num+2)
    col = subwrd(rec,1)
    hi = subwrd(rec,3)
    if (vert) 
      yt = yb + ywid
    else 
      xr = xl + xwid
    endif

*   Draw the middle boxes
    'set line 'col
    'draw recf 'xl' 'yb' 'xr' 'yt
    'set line 1 1'
    'draw rec  'xl' 'yb' 'xr' 'yt

*   Put numbers under each segment of the color key
    if (num < cnum-1)
      if (vert) 
        xp=xr+stroff
        'draw string 'xp' 'yt' 'hi
      else
        yp=yb-stroff
       'draw string 'xr' 'yp' 'hi
      endif
    endif

*   Reset variables for next loop execution
    if (vert) 
      yb = yt
    else
      xl = xr
    endif
    num = num + 1

  endwhile

return
*---------end original code from cbarn.gs---------
***************************************************************************************
function split(instr,char,where)
* note: default output if char is not found
outstr1=instr
outstr2=''
cnt=1
while(substr(instr,cnt,1)!='')
* note: GrADS thinks '+', '-' ,'0' and 'e' are all equal numbers/strings, but '++', '--' ,'00' and 'ee' are not equal
  if(substr(instr,cnt,1)''substr(instr,cnt,1)=char''char)
    outstr1=substr(instr,1,cnt-1)
*   note: return char as part of outstr2 if char is '-'
    if(char''char='--')
      outstr2=char''substr(instr,cnt+1,strlen(instr)-cnt)
    else
      outstr2=substr(instr,cnt+1,strlen(instr)-cnt)
    endif
  endif
  cnt=cnt+1
endwhile
if(where='head')
  return outstr1
endif
if(where='tail')
  return outstr2
endif
***************************************************************************************
function usage()
*
* Print usage information.
*
say '  Draw color bar for current plot.'
say ''
say '  USAGE: colorbar [left|right|bottom|top[<offset>] [<scalefactor>]]'
say '    <offset>: offset to default location.'
say '    <scalefactor>: scale factor. Default=1.'
say ''
say '  EXAMPLE 1: place color bar right of panel and shift rightward by 0.2 from default location.'
say '    colorbar right+0.2'
say ''
say '  EXAMPLE 2: place color bar below panel, shift downward by 0.3 from default location, and re-size by a factor of 0.9.'
say '    colorbar bottom-0.3 0.9'
say ''
say '  Copyright (c) 2010-2015, Bin Guan.'
return
