#__author__      = 'Leidinice Silva'
#__email__       = 'leidinicesilva@gmail.br'
#__date__        = '07/04/18'
#__description__ = 'Plot maps of seasonal precipitation'


'reinit'
*********************************************
TRIM = "DJF"

*********************************************
'sdfopen /vol3/disco1/nice/PNT_2018/output_exp6/CLM4.5/pre_amz_neb_regcm_clm4.5_exp6_201112_201211_yseasmean.nc'
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
'd pr'
*'xcbar -line on -edge triangle'

'draw title b) Precip Reg_CLM4.5_EXP6 (mm/d) - 'TRIM' 2011-2012'
*'draw xlab Longitude'

'printim /vol3/disco1/nice/PNT_2018/results/pre_amz_neb_regcm_clm_exp6_'TRIM'_2011-2012.jpeg jpeg white'


'reinit'
*********************************************
TRIM = "MAM"
*********************************************
'sdfopen /vol3/disco1/nice/PNT_2018/output_exp6/CLM4.5/pre_amz_neb_regcm_clm4.5_exp6_201112_201211_yseasmean.nc'
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
'd pr'
*'xcbar -line on -edge triangle'

'draw title e) Precip Reg_CLM4.5_EXP6 (mm/d) - 'TRIM' 2012'
*'draw xlab Longitude'

'printim /vol3/disco1/nice/PNT_2018/results/pre_amz_neb_regcm_clm_exp6_'TRIM'_2012.jpeg jpeg white'


'reinit'
*********************************************
TRIM = "JJA"
*********************************************
'sdfopen /vol3/disco1/nice/PNT_2018/output_exp6/CLM4.5/pre_amz_neb_regcm_clm4.5_exp6_201112_201211_yseasmean.nc'
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
'd pr'
*'xcbar -line on -edge triangle'

'draw title h) Precip Reg_CLM4.5_EXP6 (mm/d) - 'TRIM' 2012'
*'draw xlab Longitude'

'printim /vol3/disco1/nice/PNT_2018/results/pre_amz_neb_regcm_clm_exp6_'TRIM'_2012.jpeg jpeg white'


'reinit'
*********************************************
TRIM = "SON"
*********************************************
'sdfopen /vol3/disco1/nice/PNT_2018/output_exp6/CLM4.5/pre_amz_neb_regcm_clm4.5_exp6_201112_201211_yseasmean.nc'
'set display color white'
'set gxout shaded'
'c'

'color.gs -gxout shaded -kind white->green->blue->yellow->gold->red 0 100'
*'set clevs 1 2 4 6 10 15 20 30 40 50 60 70 80' 
'set clevs 1 2 3 4 5 6 8 10 12 15 20 30' 
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

'draw title l) Precip Reg_CLM4.5_EXP6 (mm/d) - 'TRIM' 2012'
'draw xlab Longitude'

'printim /vol3/disco1/nice/PNT_2018/results/pre_amz_neb_regcm_clm_exp6_'TRIM'_2012.jpeg jpeg white'


'reinit'
*********************************************
TRIM = "DJF"
*********************************************
'sdfopen /vol3/disco1/nice/PNT_2018/output_exp6/CLM4.5/t2m_amz_neb_regcm_exp6_mon_2011_2012_yseasmean.nc'
'set display color white'
'set gxout shaded'
'c'

'color.gs -gxout shaded -kind white->green->blue->yellow->gold->red -10 30 2'
'set cmin 0'
'set grads off'
'set xlint 5'
'set ylint 3'
'set mpdset brmap_hires'
'set map 1 1 6'
'set t 1'
'd tas'
*'xcbar -line on -edge triangle'

'draw title a) T2m Reg_CLM4.5_EXP6 (`3.`1C) - 'TRIM' 2011-2012'
*'draw xlab Longitude'

'printim /vol3/disco1/nice/PNT_2018/results/t2m_amz_neb_regcm_clm_exp6_'TRIM'_2011-2012.jpeg jpeg white'


'reinit'
*********************************************
TRIM = "MAM"
*********************************************
'sdfopen /vol3/disco1/nice/PNT_2018/output_exp6/CLM4.5/t2m_amz_neb_regcm_exp6_mon_2011_2012_yseasmean.nc'
'set display color white'
'set gxout shaded'
'c'

'color.gs -gxout shaded -kind white->green->blue->yellow->gold->red -10 30 2'
'set cmin 0'
'set grads off'
'set xlint 5'
'set ylint 3'
'set mpdset brmap_hires'
'set map 1 1 6'
'set t 2'
'd tas'
*'xcbar -line on -edge triangle'

'draw title d) T2m Reg_CLM4.5_EXP6 (`3.`1C) - 'TRIM' 2012'
*'draw xlab Longitude'

'printim /vol3/disco1/nice/PNT_2018/results/t2m_amz_neb_regcm_clm_exp6_'TRIM'_2012.jpeg jpeg white'


'reinit'
*********************************************
TRIM = "JJA"
*********************************************
'sdfopen /vol3/disco1/nice/PNT_2018/output_exp6/CLM4.5/t2m_amz_neb_regcm_exp6_mon_2011_2012_yseasmean.nc'
'set display color white'
'set gxout shaded'
'c'

'color.gs -gxout shaded -kind white->green->blue->yellow->gold->red -10 30 2'
'set cmin 0'
'set grads off'
'set xlint 5'
'set ylint 3'
'set mpdset brmap_hires'
'set map 1 1 6'
'set t 3'
'd tas'
*'xcbar -line on -edge triangle'

'draw title g) T2m Reg_CLM4.5_EXP6 (`3.`1C) - 'TRIM' 2012'
*'draw xlab Longitude'

'printim /vol3/disco1/nice/PNT_2018/results/t2m_amz_neb_regcm_clm_exp6_'TRIM'_2012.jpeg jpeg white'


'reinit'
*********************************************
TRIM = "SON"
*********************************************
'sdfopen /vol3/disco1/nice/PNT_2018/output_exp6/CLM4.5/t2m_amz_neb_regcm_exp6_mon_2011_2012_yseasmean.nc'
'set display color white'
'set gxout shaded'
'c'

'color.gs -gxout shaded -kind white->green->blue->yellow->gold->red -10 30 2'
'set cmin 0'
'set grads off'
'set xlint 5'
'set ylint 3'
'set mpdset brmap_hires'
'set map 1 1 6'
'set t 4'
'd tas'
'xcbar -line on -edge triangle'

'draw title j) T2m Reg_CLM4.5_EXP6 (`3.`1C) - 'TRIM' 2012'
'draw xlab Longitude'

'printim /vol3/disco1/nice/PNT_2018/results/t2m_amz_neb_regcm_clm_exp6_'TRIM'_2012.jpeg jpeg white'


