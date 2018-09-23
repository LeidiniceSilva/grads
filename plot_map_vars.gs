#__author__      = 'Leidinice Silva'
#__email__       = 'leidinicesilva@gmail.br'
#__date__        = '07/04/18'
#__description__ = 'Plot maps of seasonal precipitation'


'reinit'
*********************************************
TRIM = "SON"
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
'set map 1 1 6'
'set t 4'
'd pr'
'xcbar -line on -edge triangle'

'draw title n) Reg_EXP1 (mm/m) - 'TRIM' 2005'
'draw xlab Longitude'

'printim /vol3/disco1/nice/results/papers/regcm_exp/precip_regcm_exp1_maps_amz_neb_'TRIM'_2005.png png white'


'reinit'
*********************************************
TRIM = "SON"
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
'set map 1 1 6'
'set t 4'
'd pr'
'xcbar -line on -edge triangle'

'draw title o) Reg_EXP2 (mm/m) - 'TRIM' 2005'
'draw xlab Longitude'

'printim /vol3/disco1/nice/results/papers/regcm_exp/precip_regcm_exp2_maps_amz_neb_'TRIM'_2005.png png white'


'reinit'
*********************************************
TRIM = "SON"
*********************************************
'sdfopen /vol3/disco1/nice/obs/pre_amz_neb_cmap_obs_2004-2005_yseasmean.nc'
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
'set map 1 1 6'
'set t 4'
'd precip'
'xcbar -line on -edge triangle'

'draw title p) CMAP (mm/m) - 'TRIM' 2005'
'draw xlab Longitude'

'printim /vol3/disco1/nice/results/papers/regcm_exp/precip_cmap_maps_amz_neb_'TRIM'_2005.png png white'


'reinit'
*********************************************
TRIM = "SON"
*********************************************
'sdfopen /vol3/disco1/nice/obs/pre_amz_neb_trmm_obs_2004-2005_yseasmean.nc'
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
'set map 1 1 6'
'set t 4'
'd r'
'xcbar -line on -edge triangle'

'draw title q) TRMM (mm/m) - 'TRIM' 2005'
'draw xlab Longitude'

'printim /vol3/disco1/nice/results/papers/regcm_exp/precip_trmm_maps_amz_neb_'TRIM'_2005.png png white'






