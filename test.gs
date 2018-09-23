#__author__      = 'Leidinice Silva'
#__email__       = 'leidinicesilva@gmail.br'
#__date__        = '07/04/18'
#__description__ = 'Plot maps of seasonal precipitation'


'reinit'
*********************************************
TRIM = "MAM"
*********************************************
'sdfopen /vol3/disco1/nice/output1/pre_amz_neb_regcm_exp1_2004-2005_yseasmean.nc'
'set display color white'
'set gxout shaded'
'c'

'color.gs -gxout shaded -kind white->green->blue->yellow->gold->red 0 100'
'set clevs 2 4 6 10 15 20 30 40 50 60 70 80 100'
'set ccols 16 9 14 4 11 5 13 3 10 7 12 8 2 6'
'set cmin 0'
'set grads off'
'set xlint 5'
'set ylint 3'
'set mpdset brmap_hires'
'set t 2'
'd pr'
'cbarm'

'draw title b) RegCM_EXP1 (mm/m) - 'TRIM' 2005'
'draw xlab Longitude'
'draw ylab Latitude'

'printim /vol3/disco1/nice/results/papers/regcm/precip_regcm_exp1_maps_amz_neb_'TRIM'_2005.png png white'


'reinit'
*********************************************
TRIM = "MAM"
*********************************************
'sdfopen /vol3/disco1/nice/output2/pre_amz_neb_regcm_exp2_2004-2005_yseasmean.nc'
'set display color white'
'set gxout shaded'
'c'

'color.gs -gxout shaded -kind white->green->blue->yellow->gold->red 0 100'
'set clevs 2 4 6 10 15 20 30 40 50 60 70 80 100'
'set ccols 16 9 14 4 11 5 13 3 10 7 12 8 2 6'
'set cmin 0'
'set grads off'
'set xlint 5'
'set ylint 3'
'set mpdset brmap_hires'
'set t 2'
'd pr'
'xcbar -line on -edge triangle'

'draw title b) RegCM_EXP2 (mm/m) - 'TRIM' 2005'
'draw xlab Longitude'
'draw ylab Latitude'

'printim /vol3/disco1/nice/results/papers/regcm/precip_regcm_exp2_maps_amz_neb_'TRIM'_2005.png png white'






