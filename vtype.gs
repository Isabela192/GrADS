'reset'

'set display color white'
'c'

'set grads off'
'set line 1'
'set digsiz 10'
'set clopts 1 1 0.12'
*AREA GRAFICA*
'set parea .1 11 .5 8'
'set xlopts 1 3 0.17'
'set ylopts 1 3 0.17'
'set font 0'
'set grid off'


*Floresta sempre verde de folhas largas = 7 - verde escuro
'set rgb 20    51   102  0'
*MUITO urbano = 21 roxo
'set rgb 21   88    0  139'
*Grassland = 9 verde limao
'set rgb 22  0   204  0'
*savana = 18 amarelo
'set rgb 27  255  255    0' 
*grassland = 9 verde claro
'set rgb 30  51   204   51' 


*17 = áreas permanentemente encharcadas azul escuro
*19 = urbano vermelho
*12 = evergreen shrub laranja (era o pedaco que faltava)
*15 = mosaico natural/cropland verde mais claro
*10 = solo nu (na costa, apenas) amarelo 7
*************************************************
'set gxout fgrid'
'set mpdset recursos/bat_sp_hires'

'set fgvals 7 20 18 27 9 22 17 4 19 2 15 10 10 7 0 11 21 21 12 8'
'set line 1 1 3'

'd vtype2'
'draw shp recursos/MUNICIPIOS_CHUVA.shp'
'draw title Uso do Solo na Grade de São Paulo' 
