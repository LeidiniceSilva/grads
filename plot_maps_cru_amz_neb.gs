#__author__      = 'Leidinice Silva'
#__email__       = 'leidinicesilva@gmail.com'
#__date__        = '06/09/19'
#__description__ = 'Plot maps olam and obs database'


'reinit'
'set display color white'
'c'

'sdfopen /home/nice/Documents/ufrn/phd_project/datas/obs_data/pre_amz_neb_cru_ts4.02_obs_monsum_197512-200511.nc'

'set mpdset mresbr'
'set mproj scaled'
'set map 1 1 8'
'set vpage 0 11 0 8.5'
'set parea 1 5.95 5 8'
'set strsiz 0.20'
'set string 1 l 8'
'set grads off'
'set grid off'
'set gxout shaded'
'set xlab on'
'set ylab on'
'set xlopts 1 4 0.20'
'set ylopts 1 4 0.20'
'set ylint 5'
'set xlint 10'

'jan1=ave(pre,time=00Z01JAN1976,time=00Z01DEC2005,12)'
'feb1=ave(pre,time=00Z01FEB1976,time=00Z01DEC2005,12)'
'mar1=ave(pre,time=00Z01MAR1976,time=00Z01DEC2005,12)'
'apr1=ave(pre,time=00Z01APR1976,time=00Z01DEC2005,12)'
'may1=ave(pre,time=00Z01MAY1976,time=00Z01DEC2005,12)'
'jun1=ave(pre,time=00Z01JUN1976,time=00Z01DEC2005,12)'
'jul1=ave(pre,time=00Z01JUL1976,time=00Z01DEC2005,12)'
'aug1=ave(pre,time=00Z01AUG1976,time=00Z01DEC2005,12)'
'sep1=ave(pre,time=00Z01SEP1976,time=00Z01DEC2005,12)'
'oct1=ave(pre,time=00Z01OCT1976,time=00Z01DEC2005,12)'
'nov1=ave(pre,time=00Z01NOV1976,time=00Z01DEC2005,12)'
'dec1=ave(pre,time=00Z01DEC1975,time=00Z01DEC2004,12)'

'define djf1=(dec1+jan1+feb1)/(3)'
'define mam1=(mar1+apr1+may1)/(3)'
'define jja1=(jun1+jul1+aug1)/(3)'
'define son1=(sep1+oct1+nov1)/(3)'

'color 50 650 50 -kind white->darkblue->gray'

'd djf1'
'draw title A) DJF/1975-2005'
'drawbox 292 308 -12 -3'

********

'set vpage 0 11 0 8.5'
'set parea 6 10.95 5 8'
'set strsiz 0.20'
'set string 1 l 8'
'set grads off'
'set grid off'
'set gxout shaded'
'set xlab on'
'set ylab off'
'set xlopts 1 4 0.20'
'set ylopts 1 4 0.20'
'set ylint 5'
'set xlint 10'

'color 50 650 50 -kind white->darkblue->gray'

'd mam1'
'draw title B) MAM/1975-2005'
'drawbox 309.5 317.5 -15 -2.5'

**************

'set vpage 0 11 0 8.5'
'set parea 1 5.95 1 4'
'set strsiz 0.20'
'set string 1 l 8'
'set grads off'
'set grid off'
'set gxout shaded'
'set xlab on'
'set ylab on'
'set xlopts 1 4 0.20'
'set ylopts 1 4 0.20'
'set ylint 5'
'set xlint 10'

'color 50 650 50 -kind white->darkblue->gray'

'd jja1'
'draw title C) JJA/1975-2005'
'drawbox 320.5 325 -14 -3'

**************

'set vpage 0 11 0 8.5'
'set parea 6 10.95 1 4'
'set strsiz 0.20'
'set string 1 l 8'
'set grads off'
'set grid off'
'set gxout shaded'
'set xlab on'
'set ylab off'
'set xlopts 1 4 0.20'
'set ylopts 1 4 0.20'
'set ylint 5'
'set xlint 10'

'color 50 650 50 -kind white->darkblue->gray'

'd son1'
'draw title D) SON/1975-2005'
'draw string 10 0.40 (mm)'
'cbarn'

'printim mapa_chen_harr_cru.png white'



