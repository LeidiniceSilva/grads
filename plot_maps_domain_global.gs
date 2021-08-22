#__author__      = 'Leidinice Silva'
#__email__       = 'leidinicesilva@gmail.com'
#__date__        = '07/04/2018'
#__description__ = 'Plot area and subarea of study'


'reinit'
'set display color white'
'set gxout shaded'
'c'
'sdfopen /home/nice/Documentos/data_file/obs_data/precip_cmap_obs_mon_1979-2018.nc'

'color 1 14 1 -kind white->gray->darkgray'
'set mpdset mresbr'
'set map 1 1 1'
'set grid on' 
'set ylopts 1 5 .1'
'set xlopts 1 5 .1'
'set xlint 20'
'set ylint 10'
'set grads off'

'clim=ave(precip,time=00Z01JAN1979,time=00Z01MAY2018)'
'd clim'

'draw title Rain Climatology (mm/d) - CPC_v1 1979-2018'
'cbarn'


**** Amazon Brazil Domain (Reboita et al 2018) ****
'drawbox 292 308 -15 -5'

**** Northeast Brazil Domain (OLiveira et al 2017) ****
'drawbox 312 326 -16 -2'

**** La Plata Basin Domain (Solman 2019) ****
'drawbox 300 312 -36 -22'

**** CORDEX-Austral Asia Domain (Di Luca et al 2016) ****
'drawbox 130 160 -40 -20'

**** Southern Africa Domain (Giorgi et al 2012) ****
'drawbox 10 40 -35 -15'

**** South Eq. Africa Domain (Giorgi et al 2012) ****
'drawbox 8 40 -15 0'

**** Northern East Asia Domain (Giorgi et al 2012) ****
'drawbox 110 140 35 48'

**** Southern East Asia Domain (Giorgi et al 2012) ****
'drawbox 110 122 20 35'

**** India Domain (Giorgi et al 2012) ****
'drawbox 70 100 8 25'

**** Italy Domain (Coppola et al 2010) ****
'drawbox 7 21 36 50'


'printim /home/nice/Documentos/data_file/obs_data/global.png png white'


