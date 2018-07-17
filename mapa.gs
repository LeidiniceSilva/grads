'reinit'
'sdfopen  SRF.TPR.nc'
'set display color white'
'c'
'set mpdset brmap_hires'
'set map 1 1 10'
'set grid off'
'set grads off'
'set xlopts 1 4 0.15'
'set ylopts 1 4 0.15'
'set parea 1 10 1 8'
'set lat -20 10'
'set lon -85 -15'
'set cmax -1'
'set xlint 5'
'set ylint 5'

'set gxout grfill'
*'set grid on 1 1 3'
*'define a1= ave(tpr,t=1,t=720)'

*'/vol3/PNTPOS2017/color.gs -gxout shaded -kind white->blue->silver->red -levs 0.5 1.5 2.5 3.0 3.5 4 4.5 5 5.5 6 6.5 7 7.5 8 8.5 9 9.5 10 12 14 16 18 20'

'd tpr'
'draw title Dominio das Simulacoes'

'printim dominio.gif'



