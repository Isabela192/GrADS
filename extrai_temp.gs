*Extrai os valores de tempearatua para o dia*

*Para Campinas- Taquaral*
*'set lat -22.86'
*'set lon -47.05'

*Para Campinas Vl. Uniao*
*'set lat -22.96'
*'set lon -47.11'

*PARA JUNDIAI*
'set lat -23.19'
'set lon -46.89'

*PARA SBKP*
*'set lat -23.00'
*'set lon -47.13'

*************************************************
*Para IAG*
*'set lat -23.65'
*'set lon -46.62'

*Para Sé*
*'set lat -23.55'
*'set lon -46.65'

*PARELHEIROS*
*'set lat -23.86'
*'set lon -26.65'

*ITAQUERA*
*'set lat -23.55'
*'set lon -46.44'

*SBSP*
*'set lat -23.51'
*'set lon -46.62'

*SBGR*
*'set lat -23.43'
*'set lon -46.47'

'set gxout print'
'set prnopts %6.2f 1;1'

****Mudar AQUI****
write('TEMP_JUNDIAI_TEB.csv', 'TEMP;UR;PRESS')
ti = 25
f = 73
while(ti<=f)

  'set t 'ti
  
  'd press'
  PRESS = sublin(result,2)
  PRESS = subwrd(PRESS,1)

  'd tempc'  
  TEMP = sublin(result,2)
  TEMP = subwrd(TEMP,1)

  'd rh'  
  UR = sublin(result,2)
  UR = subwrd(UR,1)

  time=ti  

****Mudar AQUI****
  write('TEMP_JUNDIAI_TEB.csv',TEMP';'UR';'PRESS, append)
  ti= ti+2

endwhile
