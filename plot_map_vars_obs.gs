#__author__      = 'Leidinice Silva'
#__email__       = 'leidinicesilva@gmail.br'
#__date__        = '07/04/18'
#__description__ = 'Plot maps of seasonal precipitation'


'reinit'
*********************************************
TRIM = "DJF"
*********************************************
'sdfopen /vol3/disco1/nice/obs/pre_amz_neb_trmm_obs_2012_yseasmean.nc'
'set display color white'
'set gxout shaded'
'c'

'color.gs -gxout shaded -kind white->green->blue->yellow->gold->red 0 100'
'set clevs 1 2 4 6 10 15 20 30 40 50 60 70 80' 
'set ccols 16 9 14 4 11 5 13 3 10 7 12 8 2 6'
'set cmin 0'
'set grads off'
'set xlint 5'
'set ylint 3'
'set mpdset brmap_hires'
'set map 1 1 6'
'set t 1'
'd r'
*'xcbar -line on -edge triangle'

'draw title c) Precip TRMM (mm/d) - 'TRIM' 2011-2012'
*'draw xlab Longitude'

'printim /vol3/disco1/nice/PNT_2018/results/pre_amz_neb_trmm_'TRIM'_2011-2012.jpeg jpeg white'


'reinit'
*********************************************
TRIM = "MAM"
*********************************************
'sdfopen /vol3/disco1/nice/obs/pre_amz_neb_trmm_obs_2012_yseasmean.nc'
'set display color white'
'set gxout shaded'
'c'

'color.gs -gxout shaded -kind white->green->blue->yellow->gold->red 0 100'
'set clevs 1 2 4 6 10 15 20 30 40 50 60 70 80' 
'set ccols 16 9 14 4 11 5 13 3 10 7 12 8 2 6'
'set cmin 0'
'set grads off'
'set xlint 5'
'set ylint 3'
'set mpdset brmap_hires'
'set map 1 1 6'
'set t 2'
'd r'
*'xcbar -line on -edge triangle'

'draw title f) Precip TRMM (mm/d) - 'TRIM' 2012'
*'draw xlab Longitude'

'printim /vol3/disco1/nice/PNT_2018/results/pre_amz_neb_trmm_'TRIM'_2012.jpeg jpeg white'


'reinit'
*********************************************
TRIM = "JJA"
*********************************************
'sdfopen /vol3/disco1/nice/obs/pre_amz_neb_trmm_obs_2012_yseasmean.nc'
'set display color white'
'set gxout shaded'
'c'

'color.gs -gxout shaded -kind white->green->blue->yellow->gold->red 0 100'
'set clevs 1 2 4 6 10 15 20 30 40 50 60 70 80' 
'set ccols 16 9 14 4 11 5 13 3 10 7 12 8 2 6'
'set cmin 0'
'set grads off'
'set xlint 5'
'set ylint 3'
'set mpdset brmap_hires'
'set map 1 1 6'
'set t 3'
'd r'
*'xcbar -line on -edge triangle'

'draw title i) Precip TRMM (mm/d) - 'TRIM' 2012'
*'draw xlab Longitude'

'printim /vol3/disco1/nice/PNT_2018/results/pre_amz_neb_trmm_'TRIM'_2012.jpeg jpeg white'


'reinit'
*********************************************
TRIM = "SON"
*********************************************
'sdfopen /vol3/disco1/nice/obs/pre_amz_neb_trmm_obs_2012_yseasmean.nc'
'set display color white'
'set gxout shaded'
'c'

'color.gs -gxout shaded -kind white->green->blue->yellow->gold->red 0 100'
'set clevs 1 2 4 6 10 15 20 30 40 50 60 70 80' 
'set ccols 16 9 14 4 11 5 13 3 10 7 12 8 2 6'
'set cmin 0'
'set grads off'
'set xlint 5'
'set ylint 3'
'set mpdset brmap_hires'
'set map 1 1 6'
'set t 4'
'd r'
'xcbar -line on -edge triangle'

'draw title m) Precip TRMM (mm/d) - 'TRIM' 2012'
'draw xlab Longitude'

'printim /vol3/disco1/nice/PNT_2018/results/pre_amz_neb_trmm_'TRIM'_2012.jpeg jpeg white'



