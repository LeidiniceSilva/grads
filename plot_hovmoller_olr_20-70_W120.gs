*'!\rm hov_mono-noaa_1984.gif'
*'!\rm hov_mono-chen_2002.gif'
*'!\rm hov_mono-harr_2002.gif'
'reinit'


*OBSERVAÇÃO:
*-----------
'open /home/nice/Documentos/documents/works/degree_MCs_2015/datas/obs/rol/reg_rol-daily_controle8212noaa_20-70_W120.ctl'


*NUMÉRICO:
*---------
*'open reg_rol-daily_controle8212chen_g1_20-70_W120.ctl
*'open reg_rol-daily_controle8212harr_g1_20-70_W120.ctl

****************
'set y 1'
****************
'set lon 40 400'
*
*--
*Período muda aqui para rodar novamente e gerar outra figura:

'set time 01nov2011 31may2012'
*
*
'set gxout shaded'
'set display color white'
'c'
'set xlopts 1 4 0.15'
'set ylopts 1 4 0.15'
'set xlint 20'
'set black -10 10'
*
'set cmax  60'
'set cint  10'
'set cmin -60'
'set rbrange -60 60'
*
'set grads off'
'set csmooth on'
*
******************************
'd ave(rolf,lat=-5,lat=5)'
*'draw title OLRF: 20-70 dias, media(LAT=5N,LAT=5S)'
'draw title                  1       2     3               4a     4b'
*
*Draw international date line and equator on a map.
*'drawline Lon 180 Lat 0'
*Área1
'drawline Lon 80 Lat 0'
'drawline Lon 100 Lat 0'
*Área2
'drawline Lon 140 Lat 0'
'drawline Lon 160 Lat 0'
*Área3
'drawline Lon 180 Lat 0'
'drawline Lon 200 Lat 0'
*Área4
'drawline Lon 300 Lat 0'
'drawline Lon 320 Lat 0'
*Área5
'drawline Lon 350 Lat 0'
'drawline Lon 365 Lat 0'
*------
'cbar'
******************************


**************************************************************************************
***  FIGURA OBSERVAÇÃO ***
'enable print hov_mono-noaa_nov11mai12.gmf'
'print'
'disable print'
'!./gxgif -r -i -x 825 -y 638 hov_mono-noaa_nov11mai12.gmf -o hov_mono-noaa_nov11mai12.gif'
'!\rm hov_mono-noaa_nov11mai12.gmf'
'!see hov_mono-noaa_nov11mai12.gif'
say 'Script para gerar o diagrama de Hovmoller - por: Augusto Barbosa'
say 'Em 28set2015'
**************************************************************************************

**************************************************************************************
***  FIGURA NUM_CHEN ***
*'enable print hov_mono-chen_2002.gmf'
*'print'
*'disable print'
*'!./gxgif -r -i -x 825 -y 638 hov_mono-chen_2002.gmf -o hov_mono-chen_2002.gif'
*'!\rm hov_mono-chen_2002.gmf'
*'!see hov_mono-chen_2002.gif'
*say 'Script para gerar o diagrama de Hovmoller - por: Augusto Barbosa'
*say 'Em 17ago2015'
**************************************************************************************

**************************************************************************************
*  FIGURA NUM_HARR ***
*'enable print hov_mono-harr_2002.gmf'
*'print'
*'disable print'
*'!./gxgif -r -i -x 825 -y 638 hov_mono-harr_2002.gmf -o hov_mono-harr_2002.gif'
*'!\rm hov_mono-harr_2002.gmf'
*'!see hov_mono-harr_2002.gif'
*say 'Script para gerar o diagrama de Hovmoller - por: Augusto Barbosa'
*say 'Em 17ago2015'
**************************************************************************************






