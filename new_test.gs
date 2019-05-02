'reinit'
'set display color white'
'c'

'sdfopen chuva_xavier_1980_2016.nc'

'set mpdset brmap hires'
'set lon -48.8 -34.5'
'set lat -18.7 -1'

'set mproj scaled'
'set map 1 1 7'
'set vpage 0 11 0 8.5'
'set parea 2.4 5.4 4.5 8'
'set strsiz 0.19'
'set string 1 l 6'
'draw string 2.45 8.2 a)'
'set grads off'
'set grid off'
'set gxout shaded'
'set xlab off'
'set ylab on'
'set xlopts 1 4 0.18'
'set ylopts 1 4 0.18'
'set ylint 3'
'set xlint 3'

'define DJF2012=ave(prec,t=11658,t=11748)'
'define DJF2013=ave(prec,t=12024,t=12113)'
'define DJF2014=ave(prec,t=12389,t=12478)'
'define DJF2015=ave(prec,t=12754,t=12843)'
'define DJF2016=ave(prec,t=13119,t=13209)'

'define nordesteDJF=(DJF2012+DJF2013+DJF2014+DJF2015+DJF2016)/(5)'

'color.gs -gxout shaded -kind darkgreen->cyan->darkblue -levs 1 2 3 4 5 6 7 8'
'd nordesteDJF'
'draw title DJF'
'draw ylab Observed'
*

'set vpage 0 11 0 8.5'
'set parea 6 9 4.5 8'
'draw string 6.05 8.2 b)'
'set grads off'
'set grid off'
'set gxout shaded'
'set xlab off'
'set ylab on'
'set ylint 3'

'define MAM2012=ave(prec,t=11749,t=11840)'
'define MAM2013=ave(prec,t=12114,t=12205)'
'define MAM2014=ave(prec,t=12479,t=12570)'
'define MAM2015=ave(prec,t=12844,t=12935)'
'define MAM2016=ave(prec,t=13210,t=13301)'

'define nordesteMAM=(MAM2012+MAM2013+MAM2014+MAM2015+MAM2016)/(5)'

'color.gs -gxout shaded -kind darkgreen->cyan->darkblue -levs 1 2 3 4 5 6 7 8'
'd nordesteMAM'
'draw title MAM'

'close 1'

'open pr_CHUVA_DJF_TBAND_20122016.nc.ctl'

'set grads off'

'set mpdset brmap hires'
'set lon -48.8 -34.5'
'set lat -18.7 -1'
'set mproj scaled'
'set map 1 1 7'

'set vpage 0 11 0 8.5'
'set parea 2.4 5.4 0.6 4.1'
'draw string 2.45 4.3 c)'
'set grads off'
'set grid off'
'set gxout shaded'
'set xlab on'
'set ylab on'
'set xlopts 1 4 0.18'
'set ylopts 1 4 0.18'
'set ylint 3'
'set xlint 3'

'define chuva=ave(pr,t=1,t=20)'

'color.gs -gxout shaded -kind darkgreen->cyan->darkblue -levs 1 2 3 4 5 6 7 8'
'd chuva*86400'
'basemap O 0 1 L'
'draw ylab RegCM'

'close 1'

'set display color white'

'set grads off'
'set grid off'

'open pr_CHUVA_MAM_TBAND_20122016.nc.ctl'

'set mpdset brmap hires'
'set lon -48.8 -34.5'
'set lat -18.7 -1'
'set mproj scaled'
'set map 1 1 7'

'set vpage 0 11 0 8.5'
'set parea 6 9 0.6 4.1'
'draw string 6.05 4.3 d)'
'set grads off'
'set grid off'
'set gxout shaded'
'set xlab on'
'set ylab on'
'set xlopts 1 4 0.18'
'set ylopts 1 4 0.18'
'set ylint 3'
'set xlint 3'

'define rainfall=ave(pr,t=1,t=18)'

'color.gs -gxout shaded -kind darkgreen->cyan->darkblue -levs 1 2 3 4 5 6 7 8'
'd rainfall*86400'
'basemap O 0 1 L'

'run xcbar 9.27 9.66 2 7 -fw 0.12 -fh 0.18 -line on'
