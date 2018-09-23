#__author__      = 'Leidinice Silva'
#__email__       = 'leidinicesilva@gmail.br'
#__date__        = '07/04/18'
#__description__ = 'Plot maps of seasonal precipitation'


'reinit'
*********************************************
TRIM = "DJF"
*********************************************
'sdfopen /home/nice/pre_amz_neb_cmap_obs_2004-2005_yseasmean.nc'
'set display color white'
'set gxout shaded'
'c'
'color.gs -gxout shaded -kind white->green->blue->yellow->gold->red 0 100'
'set clevs 0 2 4 6 10 15 20 30 40 50 60 80 100 120'
'set ccols 16 9 14 4 11 5 13 3 10 7 12 8 2 6'
'set cmin 0'
'set grads off'
'set mpdset brmap_hires'
'set t 1'
'd precip'
'cbarn'
'draw title CMAP (mm) - 'TRIM' 2004/2005'
'draw xlab Longitude'
'draw ylab Latitude'
'printim /home/nice/precip_maps_amz_neb_'TRIM'_2004-2005.png png white'

