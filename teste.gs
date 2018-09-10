
#__author__      = 'Leidinice Silva'
#__email__       = 'leidinicesilva@gmail.br'
#__date__        = '07/04/18'
#__description__ = 'Plot area and subarea of study'


'reinit'
'sdfopen /vol3/nice/obs/pre_mon_cru_ts4.01_observation_1901-2016.nc'
'set display color white'
'set gxout shaded'
'c'
'color.gs -gxout shaded -kind white->green->blue->yellow->gold->red 0 100'
'set clevs 0 2 4 6 10 15 20 30 40 50 60 80 100 120'
'set ccols 16 9 14 4 11 5 13 3 10 7 12 8 2 6'
'set mpdset brmap_hires'
'set map 1 1 3'
'set grid off'
'set ylopts 1 6 .1'
'set t last'
'set xlopts 1 5 .1'
'set xlint 15'
'set ylopts 1 5 .1'
'set ylint 10'
'set grads off'
'set font 1'
'set ccolor 2'
'd pre'
'cbarm'
'draw title Precipitacao Media Observada do CRU - Dez/2016 (`3.`1C)'



'printim /vol3/nice/results/obs/precip_media_obs_cru_dez-2016.png png white'
