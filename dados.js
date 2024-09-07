let dados = [
    // Acre
    {titulo: "Arara do Rio Amônia", descricao: "Povo indígena localizado na região do Rio Amônia, com língua e cultura próprias.", link: "https://pib.socioambiental.org/pt/Povo:Arara_do_Rio_Am%C3%B4nia", tags: "Acre AC"},
    {titulo: "Arara Shawãdawa", descricao: "Grupo indígena da etnia Arara localizado no Acre, conhecido por suas tradições culturais.", link: "https://pib.socioambiental.org/pt/Povo:Arara_Shaw%C3%A3dawa", tags: "Acre AC"},
    {titulo: "Ashaninka", descricao: "Indígenas da etnia Ashaninka que habitam a região do Acre, conhecidos por suas tradições rituais.", link: "https://pib.socioambiental.org/pt/Povo:Ashaninka", tags: "Acre AC"},
    {titulo: "Huni Kuin (Kaxinawá)", descricao: "Povo da etnia Kaxinawá, também conhecido como Huni Kuin, vive na região do Acre e é conhecido por sua rica cultura e tradições.", link: "https://pib.socioambiental.org/pt/Povo:Huni_Kuin", tags: "Acre AC"},
    {titulo: "Katukina Pano", descricao: "Grupo indígena da etnia Katukina Pano, localizado no Acre, com tradições culturais e língua próprias.", link: "https://pib.socioambiental.org/pt/Povo:Katukina_Pano", tags: "Acre AC"},
    {titulo: "Kulina", descricao: "Povo indígena da etnia Kulina que vive no Acre, com tradições e língua próprias.", link: "https://pib.socioambiental.org/pt/Povo:Kulina", tags: "Acre AC"},
    {titulo: "Manchineri", descricao: "Indígenas da etnia Manchineri localizados no Acre, conhecidos por suas tradições culturais e língua.", link: "https://pib.socioambiental.org/pt/Povo:Manchineri", tags: "Acre AC"},
    {titulo: "Nawa", descricao: "Grupo indígena da etnia Nawa que habita o Acre, com cultura e língua próprias.", link: "https://pib.socioambiental.org/pt/Povo:Nawa", tags: "Acre AC"},
    {titulo: "Nukini", descricao: "Povo indígena da etnia Nukini localizado no Acre, conhecido por suas tradições culturais.", link: "https://pib.socioambiental.org/pt/Povo:Nukini", tags: "Acre AC"},
    {titulo: "Puyanawa", descricao: "Grupo indígena da etnia Puyanawa, presente no Acre, com suas próprias tradições e língua.", link: "https://pib.socioambiental.org/pt/Povo:Puyanawa", tags: "Acre AC"},
    {titulo: "Shanenawa", descricao: "Indígenas da etnia Shanenawa, localizados no Acre, conhecidos por suas práticas culturais e língua.", link: "https://pib.socioambiental.org/pt/Povo:Shanenawa", tags: "Acre AC"},
    {titulo: "Xinane", descricao: "Povo indígena da etnia Xinane que vive no Acre, com tradições culturais próprias.", link: "https://pib.socioambiental.org/pt/Povo:Xinane", tags: "Acre AC"},
    {titulo: "Yaminawá", descricao: "Indígenas da etnia Yaminawá localizados no Acre, conhecidos por suas tradições culturais e língua.", link: "https://pib.socioambiental.org/pt/Povo:Yaminaw%C3%A1", tags: "Acre AC"},
    {titulo: "Yawanawá", descricao: "Grupo indígena da etnia Yawanawá que habita o Acre, conhecido por suas tradições e língua próprias.", link: "https://pib.socioambiental.org/pt/Povo:Yawanaw%C3%A1", tags: "Acre AC"},

    // Alagoas
    {titulo: "Jiripancó", descricao: "Povo indígena da etnia Jiripancó, localizado em Alagoas, com tradições culturais próprias.", link: "https://pib.socioambiental.org/pt/Povo:Jiripanc%C3%B3", tags: "Alagoas AL"},
    {titulo: "Kalankó", descricao: "Grupo indígena da etnia Kalankó, presente em Alagoas, conhecido por suas práticas culturais.", link: "https://pib.socioambiental.org/pt/Povo:Kalank%C3%B3", tags: "Alagoas AL"},
    {titulo: "Karapotó", descricao: "Indígenas da etnia Karapotó localizados em Alagoas, com sua própria cultura e língua.", link: "https://pib.socioambiental.org/pt/Povo:Karapot%C3%B3", tags: "Alagoas AL"},
    {titulo: "Kariri-Xokó", descricao: "Povo indígena da etnia Kariri-Xokó que habita Alagoas, com tradições e língua próprias.", link: "https://pib.socioambiental.org/pt/Povo:Kariri-Xok%C3%B3", tags: "Alagoas AL"},
    {titulo: "Tingui Botó", descricao: "Grupo indígena da etnia Tingui Botó, localizado em Alagoas, conhecido por suas tradições culturais.", link: "https://pib.socioambiental.org/pt/Povo:Tingui_Bot%C3%B3", tags: "Alagoas AL"},
    {titulo: "Tuxá", descricao: "Indígenas da etnia Tuxá, presentes em Alagoas, com tradições culturais e língua próprias.", link: "https://pib.socioambiental.org/pt/Povo:Tux%C3%A1", tags: "Alagoas AL"},
    {titulo: "Wassu", descricao: "Povo indígena da etnia Wassu localizado em Alagoas, com cultura e língua próprias.", link: "https://pib.socioambiental.org/pt/Povo:Wassu", tags: "Alagoas AL"},
    {titulo: "Xukuru-Kariri", descricao: "Grupo indígena da etnia Xukuru-Kariri que habita Alagoas, conhecido por suas tradições culturais.", link: "https://pib.socioambiental.org/pt/Povo:Xukuru-Kariri", tags: "Alagoas AL"},

    // Amazonas
    {titulo: "Apurinã", descricao: "Povo indígena da etnia Apurinã, localizado no Amazonas, com tradições culturais e língua próprias.", link: "https://pib.socioambiental.org/pt/Povo:Apurin%C3%A3", tags: "Amazonas AM"},
    {titulo: "Arapas", descricao: "Grupo indígena da etnia Arapas que vive no Amazonas, com suas tradições culturais.", link: "https://pib.socioambiental.org/pt/Povo:Arapas", tags: "Amazonas AM"},
    {titulo: "Banawá", descricao: "Indígenas da etnia Banawá localizados no Amazonas, conhecidos por suas tradições e língua.", link: "https://pib.socioambiental.org/pt/Povo:Banaw%C3%A1", tags: "Amazonas AM"},
    {titulo: "Baniwa", descricao: "Povo da etnia Baniwa, que habita o Amazonas, conhecido por suas práticas culturais e língua.", link: "https://pib.socioambiental.org/pt/Povo:Baniwa", tags: "Amazonas AM"},
    {titulo: "Bará", descricao: "Grupo indígena da etnia Bará localizado no Amazonas, com tradições e língua próprias.", link: "https://pib.socioambiental.org/pt/Povo:Bar%C3%A1", tags: "Amazonas AM"},
    {titulo: "Barasana", descricao: "Indígenas da etnia Barasana, presentes no Amazonas, conhecidos por suas tradições culturais.", link: "https://pib.socioambiental.org/pt/Povo:Barasana", tags: "Amazonas AM"},
    {titulo: "Baré", descricao: "Povo indígena da etnia Baré que vive no Amazonas, conhecido por sua rica cultura e tradições.", link: "https://pib.socioambiental.org/pt/Povo:Bar%C3%A9", tags: "Amazonas AM"},
    {titulo: "Borari", descricao: "Grupo indígena da etnia Borari, localizado no Amazonas, com suas próprias tradições e língua.", link: "https://pib.socioambiental.org/pt/Povo:Borari", tags: "Amazonas AM"},
    {titulo: "Dâw", descricao: "Indígenas da etnia Dâw, presentes no Amazonas, conhecidos por suas tradições culturais e língua.", link: "https://pib.socioambiental.org/pt/Povo", tags: "Amazonas AM"},
    
     // Amapá
     {titulo: "Akuriyó", descricao: "Povo indígena da etnia Akuriyó, localizado no Amapá, com cultura e língua próprias.", link: "https://pib.socioambiental.org/pt/Povo:Akuriy%C3%B3", tags: "Amapá amapa AP"},
     {titulo: "Aparai", descricao: "Grupo indígena da etnia Aparai que habita o Amapá, conhecido por suas tradições culturais.", link: "https://pib.socioambiental.org/pt/Povo:Aparai", tags: "Amapá amapa AP"},
     {titulo: "Galibi Kali'na", descricao: "Indígenas da etnia Galibi Kali'na localizados no Amapá, com língua e cultura próprias.", link: "https://pib.socioambiental.org/pt/Povo:Galibi_Kali%27na", tags: "Amapá amapa AP"},
     {titulo: "Galibi-Marworno", descricao: "Povo indígena da etnia Galibi-Marworno, que vive no Amapá, conhecido por suas práticas culturais.", link: "https://pib.socioambiental.org/pt/Povo:Galibi-Marworno", tags: "Amapá amapa AP"},
     {titulo: "Karipuna do Amapá", descricao: "Grupo indígena da etnia Karipuna localizado no Amapá, com suas tradições e língua.", link: "https://pib.socioambiental.org/pt/Povo:Karipuna_do_Amap%C3%A1", tags: "Amapá amapa AP"},
     {titulo: "Katxuyana", descricao: "Indígenas da etnia Katxuyana, que habitam o Amapá, conhecidos por suas tradições culturais e língua.", link: "https://pib.socioambiental.org/pt/Povo:Katxuyana", tags: "Amapá amapa AP"},
     {titulo: "Palikur", descricao: "Povo indígena da etnia Palikur localizado no Amapá, com cultura e língua próprias.", link: "https://pib.socioambiental.org/pt/Povo:Palikur", tags: "Amapá amapa AP"},
     {titulo: "Tiriyó", descricao: "Grupo indígena da etnia Tiriyó, presente no Amapá, conhecido por suas tradições e língua.", link: "https://pib.socioambiental.org/pt/Povo:Tiriy%C3%B3", tags: "Amapá amapa AP"},
     {titulo: "Wajãpi", descricao: "Indígenas da etnia Wajãpi, que habitam o Amapá, conhecidos por suas tradições culturais e língua.", link: "https://pib.socioambiental.org/pt/Povo:Waj%C3%A3pi", tags: "Amapá amapa AP"},
     {titulo: "Wayana", descricao: "Povo indígena da etnia Wayana localizado no Amapá, com suas próprias tradições e língua.", link: "https://pib.socioambiental.org/pt/Povo:Wayana", tags: "Amapá amapa AP"},
      
     // Bahia
    {titulo: "Atikum", descricao: "Povo indígena da etnia Atikum localizado na Bahia, com rica tradição cultural e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Atikum", tags: "Bahia BA"},
    {titulo: "Kaimbé", descricao: "Grupo indígena da etnia Kaimbé que habita a Bahia, conhecido por suas práticas culturais e língua.", link: "https://pib.socioambiental.org/pt/Povo:Kaimb%C3%A9", tags: "Bahia BA"},
    {titulo: "Kantaruré", descricao: "Povo indígena da etnia Kantaruré localizado na Bahia, com tradições e língua próprias.", link: "https://pib.socioambiental.org/pt/Povo:Kantarur%C3%A9", tags: "Bahia BA"},
    {titulo: "Kiriri", descricao: "Indígenas da etnia Kiriri, presentes na Bahia, conhecidos por sua rica cultura e língua.", link: "https://pib.socioambiental.org/pt/Povo:Kiriri", tags: "Bahia BA"},
    {titulo: "Pankararé", descricao: "Grupo indígena da etnia Pankararé que habita a Bahia, com tradições culturais e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Pankarar%C3%A9", tags: "Bahia BA"},
    {titulo: "Pankaru", descricao: "Povo indígena da etnia Pankaru localizado na Bahia, com suas tradições culturais e língua.", link: "https://pib.socioambiental.org/pt/Povo:Pankaru", tags: "Bahia BA"},
    {titulo: "Pataxó", descricao: "Indígenas da etnia Pataxó presentes na Bahia, conhecidos por suas tradições e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Patax%C3%B3", tags: "Bahia BA"},
    {titulo: "Truká", descricao: "Grupo indígena da etnia Truká que habita a Bahia, com rica tradição cultural e língua.", link: "https://pib.socioambiental.org/pt/Povo:Truk%C3%A1", tags: "Bahia BA"},
    {titulo: "Tumbalalá", descricao: "Povo indígena da etnia Tumbalalá localizado na Bahia, com suas práticas culturais e língua.", link: "https://pib.socioambiental.org/pt/Povo:Tumbalal%C3%A1", tags: "Bahia BA"},
    {titulo: "Tupinambá", descricao: "Indígenas da etnia Tupinambá presentes na Bahia, conhecidos por suas tradições culturais e língua.", link: "https://pib.socioambiental.org/pt/Povo:Tupinamb%C3%A1", tags: "Bahia BA"},
    {titulo: "Tuxá", descricao: "Grupo indígena da etnia Tuxá localizado na Bahia, com rica tradição cultural e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Tux%C3%A1", tags: "Bahia BA"},
    {titulo: "Xukuru-Kariri", descricao: "Povo indígena da etnia Xukuru-Kariri que habita a Bahia, conhecidos por suas práticas culturais e língua.", link: "https://pib.socioambiental.org/pt/Povo:Xukuru-Kariri", tags: "Bahia BA"},

        // Ceará
        {titulo: "Anacé", descricao: "Povo indígena da etnia Anacé localizado no Ceará, com suas tradições culturais e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Anac%C3%A9", tags: "Ceará CE"},
        {titulo: "Jenipapo-Kanindé", descricao: "Grupo indígena da etnia Jenipapo-Kanindé que habita o Ceará, conhecido por suas práticas culturais e língua.", link: "https://pib.socioambiental.org/pt/Povo:Jenipapo-Kanind%C3%A9", tags: "Ceará Ceara CE"},
        {titulo: "Pitaguary", descricao: "Indígenas da etnia Pitaguary presentes no Ceará, com rica tradição cultural e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Pitaguary", tags: "Ceará  Ceara CE"},
        {titulo: "Potiguara", descricao: "Povo indígena da etnia Potiguara localizado no Ceará, com suas tradições culturais e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Potiguara", tags: "Ceará Ceara CE"},
        {titulo: "Tabajara", descricao: "Grupo indígena da etnia Tabajara presente no Ceará, conhecidos por suas tradições culturais e língua.", link: "https://pib.socioambiental.org/pt/Povo:Tabajara", tags: "Ceará Ceara CE"},
        {titulo: "Tapeba", descricao: "Povo indígena da etnia Tapeba localizado no Ceará, com rica tradição cultural e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Tapeba", tags: "Ceará Ceara CE"},
        {titulo: "Tapuia", descricao: "Grupo indígena da etnia Tapuia presente no Ceará, conhecidos por suas tradições culturais e língua.", link: "https://pib.socioambiental.org/pt/Povo:Tapuia", tags: "Ceará Ceara CE"},
        {titulo: "Tremembé", descricao: "Povo indígena da etnia Tremembé localizado no Ceará, com suas práticas culturais e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Trememb%C3%A9", tags: "Ceará Ceara CE"},
    
        // Distrito Federal
        {titulo: "Kariri-Xokó", descricao: "Povo indígena da etnia Kariri-Xokó que habita o Distrito Federal, com rica tradição cultural e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Kariri-Xok%C3%B3", tags: "Distrito Federal DF"},
        {titulo: "Tapuia", descricao: "Grupo indígena da etnia Tapuia localizado no Distrito Federal, conhecidos por suas práticas culturais e língua.", link: "https://pib.socioambiental.org/pt/Povo:Tapuia", tags: "Distrito Federal DF"},
        {titulo: "Tuxá", descricao: "Povo indígena da etnia Tuxá presente no Distrito Federal, com suas tradições culturais e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Tux%C3%A1", tags: "Distrito Federal DF"},
    
        // Espírito Santo
        {titulo: "Guarani", descricao: "Indígenas da etnia Guarani que vivem no Espírito Santo, com rica tradição cultural e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Guarani", tags: "Espírito Santo Espirito Santo ES"},
        {titulo: "Tupiniquim", descricao: "Grupo indígena da etnia Tupiniquim localizado no Espírito Santo, conhecidos por suas práticas culturais e língua.", link: "https://pib.socioambiental.org/pt/Povo:Tupiniquim", tags: "Espírito Santo Espirito Santo ES"},
    
        // Goiás
        {titulo: "Avá-Canoeiro", descricao: "Povo indígena da etnia Avá-Canoeiro que habita Goiás, com suas tradições culturais e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Av%C3%A1-Canoeiro", tags: "Goiás goias GO"},
        {titulo: "Iny Karajá", descricao: "Grupo indígena da etnia Iny Karajá localizado em Goiás, com rica tradição cultural e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Iny_Karaj%C3%A1", tags: "Goiás goias GO"},
        {titulo: "Javaé", descricao: "Povo indígena da etnia Javaé presente em Goiás, conhecidos por suas tradições culturais e língua.", link: "https://pib.socioambiental.org/pt/Povo:Java%C3%A9", tags: "Goiás goias GO"},
        {titulo: "Tapuia", descricao: "Grupo indígena da etnia Tapuia que habita Goiás, com suas práticas culturais e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Tapuia", tags: "Goiás goias GO"},
         // Maranhão
    {titulo: "Awa Guajá", descricao: "Povo indígena da etnia Awa Guajá localizado no Maranhão, conhecidos por sua rica tradição cultural e língua.", link: "https://pib.socioambiental.org/pt/Povo:Awa_Guaj%C3%A1", tags: "Maranhão Maranhao MA"},
    {titulo: "Canela Apanyekrá", descricao: "Grupo indígena da etnia Canela Apanyekrá que habita o Maranhão, com suas tradições culturais e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Canela_Apanyekr%C3%A1", tags: "Maranhão Maranhao MA"},
    {titulo: "Canela Memortumré", descricao: "Povo indígena da etnia Canela Memortumré no Maranhão, conhecidos por suas práticas culturais e língua.", link: "https://pib.socioambiental.org/pt/Povo:Canela_Memortumr%C3%A9", tags: "Maranhão Maranhao MA"},
    {titulo: "Gamela", descricao: "Grupo indígena da etnia Gamela localizado no Maranhão, com rica tradição cultural e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Gamela", tags: "Maranhão MA"},
    {titulo: "Gavião Pykopjê", descricao: "Povo indígena da etnia Gavião Pykopjê presente no Maranhão, conhecidos por suas tradições culturais e língua.", link: "https://pib.socioambiental.org/pt/Povo:Gavi%C3%A3o_Pykopj%C3%AA", tags: "Maranhão Maranhao MA"},
    {titulo: "Guajajara", descricao: "Grupo indígena da etnia Guajajara que habita o Maranhão, com suas práticas culturais e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Guajajara", tags: "Maranhão Maranhao MA"},
    {titulo: "Ka'apor", descricao: "Povo indígena da etnia Ka'apor localizado no Maranhão, conhecidos por suas tradições culturais e língua.", link: "https://pib.socioambiental.org/pt/Povo:Ka%27apor", tags: "Maranhão Maranhao MA"},
    {titulo: "Krenyê", descricao: "Grupo indígena da etnia Krenyê presente no Maranhão, com rica tradição cultural e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Kreny%C3%AA", tags: "Maranhão Maranhao MA"},
    {titulo: "Krikatí", descricao: "Povo indígena da etnia Krikatí que habita o Maranhão, conhecidos por suas práticas culturais e língua.", link: "https://pib.socioambiental.org/pt/Povo:Krikat%C3%AD", tags: "Maranhão Maranhao MA"},
    {titulo: "Tabajara", descricao: "Grupo indígena da etnia Tabajara localizado no Maranhão, com suas tradições culturais e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Tabajara", tags: "Maranhão Maranhao MA"},
    {titulo: "Tembé", descricao: "Povo indígena da etnia Tembé presente no Maranhão, com rica tradição cultural e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Temb%C3%A9", tags: "Maranhão Maranhao MA"},

    // Minas Gerais
    {titulo: "Aranã", descricao: "Povo indígena da etnia Aranã localizado em Minas Gerais, conhecidos por suas tradições culturais e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Aran%C3%A3", tags: "Minas Gerais MG"},
    {titulo: "Kaxixó", descricao: "Grupo indígena da etnia Kaxixó presente em Minas Gerais, com rica tradição cultural e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Kaxix%C3%B3", tags: "Minas Gerais MG"},
    {titulo: "Krenak", descricao: "Povo indígena da etnia Krenak localizado em Minas Gerais, conhecidos por suas práticas culturais e língua.", link: "https://pib.socioambiental.org/pt/Povo:Krenak", tags: "Minas Gerais MG"},
    {titulo: "Maxakali", descricao: "Grupo indígena da etnia Maxakali que habita Minas Gerais, com suas tradições culturais e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Maxakali", tags: "Minas Gerais MG"},
    {titulo: "Mukurin", descricao: "Povo indígena da etnia Mukurin presente em Minas Gerais, conhecidos por suas práticas culturais e língua.", link: "https://pib.socioambiental.org/pt/Povo:Mukurin", tags: "Minas Gerais MG"},
    {titulo: "Pankararu", descricao: "Grupo indígena da etnia Pankararu localizado em Minas Gerais, com rica tradição cultural e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Pankararu", tags: "Minas Gerais MG"},
    {titulo: "Pataxó", descricao: "Povo indígena da etnia Pataxó presente em Minas Gerais, conhecidos por suas tradições culturais e língua.", link: "https://pib.socioambiental.org/pt/Povo:Patax%C3%B3", tags: "Minas Gerais MG"},
    {titulo: "Pataxó Hã-Hã-Hãe", descricao: "Grupo indígena da etnia Pataxó Hã-Hã-Hãe que habita Minas Gerais, com suas práticas culturais e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Patax%C3%B3_H%C3%A3-H%C3%A3-H%C3%A3", tags: "Minas Gerais MG"},
    {titulo: "Tuxá", descricao: "Povo indígena da etnia Tuxá presente em Minas Gerais, com rica tradição cultural e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Tux%C3%A1", tags: "Minas Gerais MG"},
    {titulo: "Xakriabá", descricao: "Grupo indígena da etnia Xakriabá localizado em Minas Gerais, conhecidos por suas práticas culturais e língua.", link: "https://pib.socioambiental.org/pt/Povo:Xakriab%C3%A1", tags: "Minas Gerais MG"},
    {titulo: "Xukuru-Kariri", descricao: "Povo indígena da etnia Xukuru-Kariri presente em Minas Gerais, com suas tradições culturais e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Xukuru-Kariri", tags: "Minas Gerais MG"},

    // Mato Grosso do Sul
    {titulo: "Guarani", descricao: "Povo indígena da etnia Guarani que habita Mato Grosso do Sul, com suas tradições culturais e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Guarani", tags: "Mato Grosso do Sul MS"},
    {titulo: "Guató", descricao: "Grupo indígena da etnia Guató presente em Mato Grosso do Sul, com rica tradição cultural e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Guat%C3%B3", tags: "Mato Grosso do Sul MS"},
    {titulo: "Kadiwéu", descricao: "Povo indígena da etnia Kadiwéu localizado em Mato Grosso do Sul, conhecidos por suas práticas culturais e língua.", link: "https://pib.socioambiental.org/pt/Povo:Kadiw%C3%A9u", tags: "Mato Grosso do Sul MS"},
    {titulo: "Kinikinau", descricao: "Grupo indígena da etnia Kinikinau presente em Mato Grosso do Sul, com suas tradições culturais e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Kinikinau", tags: "Mato Grosso do Sul MS"},
    {titulo: "Ofaié", descricao: "Povo indígena da etnia Ofaié localizado em Mato Grosso do Sul, conhecidos por suas práticas culturais e língua.", link: "https://pib.socioambiental.org/pt/Povo:Ofai%C3%A9", tags: "Mato Grosso do Sul MS"},
    {titulo: "Terena", descricao: "Grupo indígena da etnia Terena que habita Mato Grosso do Sul, com suas tradições culturais e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Terena", tags: "Mato Grosso do Sul MS"},

    // Mato Grosso
    {titulo: "Apiaká", descricao: "Povo indígena da etnia Apiaká localizado em Mato Grosso, conhecidos por suas tradições culturais e língua própria.", link: "https://pib.socioambiental.org/pt/Povo", tags: "Mato Grosso MT"},

     // Pará
     {titulo: "Aikewara", descricao: "Povo indígena da etnia Aikewara localizado no Pará, conhecidos por suas tradições culturais e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Aikewara", tags: "Pará Para PA"},
     {titulo: "Akuriyó", descricao: "Grupo indígena da etnia Akuriyó presente no Pará, com rica tradição cultural e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Akuriy%C3%B3", tags: "Pará Para PA"},
     {titulo: "Amanayé", descricao: "Povo indígena da etnia Amanayé localizado no Pará, conhecidos por suas práticas culturais e língua.", link: "https://pib.socioambiental.org/pt/Povo:Amanay%C3%A9", tags: "Pará Para PA"},
     {titulo: "Anambé", descricao: "Grupo indígena da etnia Anambé presente no Pará, com suas tradições culturais e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Anamb%C3%A9", tags: "Pará Para PA"},
     {titulo: "Aparai", descricao: "Povo indígena da etnia Aparai que habita o Pará, com rica tradição cultural e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Aparai", tags: "Pará Para PA"},
     {titulo: "Apiaká", descricao: "Grupo indígena da etnia Apiaká localizado no Pará, conhecidos por suas tradições culturais e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Apiak%C3%A1", tags: "Pará Para PA"},
     {titulo: "Arapium", descricao: "Povo indígena da etnia Arapium presente no Pará, com suas práticas culturais e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Arapium", tags: "Pará Para PA"},
     {titulo: "Arara", descricao: "Grupo indígena da etnia Arara localizado no Pará, com rica tradição cultural e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Arara", tags: "Pará Para PA"},
     {titulo: "Arara da Volta Grande do Xingu", descricao: "Povo indígena da etnia Arara da Volta Grande do Xingu no Pará, conhecidos por suas práticas culturais e língua.", link: "https://pib.socioambiental.org/pt/Povo:Arara_da_Volta_Grande_do_Xingu", tags: "Pará Para PA"},
     {titulo: "Araweté", descricao: "Povo indígena da etnia Araweté que habita o Pará, com suas tradições culturais e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Arawet%C3%A9", tags: "Pará PA"},
     {titulo: "Asurini do Tocantins", descricao: "Grupo indígena da etnia Asurini do Tocantins presente no Pará, com suas tradições culturais e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Asurini_do_Tocantins", tags: "Pará Para PA"},
     {titulo: "Asurini do Xingu", descricao: "Povo indígena da etnia Asurini do Xingu localizado no Pará, conhecidos por suas práticas culturais e língua.", link: "https://pib.socioambiental.org/pt/Povo:Asurini_do_Xingu", tags: "Pará Para PA"},
     {titulo: "Awa Guajá", descricao: "Grupo indígena da etnia Awa Guajá presente no Pará, com rica tradição cultural e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Awa_Guaj%C3%A1", tags: "Pará Para PA"},
     {titulo: "Borari", descricao: "Povo indígena da etnia Borari localizado no Pará, com suas tradições culturais e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Borari", tags: "Pará Para PA"},
     {titulo: "Gavião Akrãtikatêjê", descricao: "Grupo indígena da etnia Gavião Akrãtikatêjê presente no Pará, com rica tradição cultural e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Gavi%C3%A3o_Akr%C3%A3tikat%C3%AAj%C3%AA", tags: "Pará Para PA"},
     {titulo: "Gavião Kykatejê", descricao: "Povo indígena da etnia Gavião Kykatejê localizado no Pará, conhecidos por suas práticas culturais e língua.", link: "https://pib.socioambiental.org/pt/Povo:Gavi%C3%A3o_Kykatej%C3%AA", tags: "Pará Para PA"},
     {titulo: "Gavião Parkatêjê", descricao: "Grupo indígena da etnia Gavião Parkatêjê presente no Pará, com suas tradições culturais e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Gavi%C3%A3o_Parkat%C3%AAj%C3%AA", tags: "Pará Para PA"},
     {titulo: "Guajajara", descricao: "Povo indígena da etnia Guajajara que habita o Pará, com rica tradição cultural e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Guajajara", tags: "Pará Para PA"},
     {titulo: "Guarani", descricao: "Grupo indígena da etnia Guarani localizado no Pará, conhecidos por suas tradições culturais e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Guarani", tags: "Pará Para PA"},
     {titulo: "Hixkaryana", descricao: "Povo indígena da etnia Hixkaryana presente no Pará, com suas práticas culturais e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Hixkaryana", tags: "Pará Para PA"},
     {titulo: "Iny Karajá", descricao: "Grupo indígena da etnia Iny Karajá localizado no Pará, conhecidos por suas tradições culturais e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Iny_Karaj%C3%A1", tags: "Pará Para PA"},
     {titulo: "Jaraqui", descricao: "Povo indígena da etnia Jaraqui presente no Pará, com suas práticas culturais e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Jaraqui", tags: "Pará Para PA"},
     {titulo: "Ka'apor", descricao: "Grupo indígena da etnia Ka'apor localizado no Pará, com rica tradição cultural e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Ka%27apor", tags: "Pará Para PA"},
     {titulo: "Kahyana", descricao: "Povo indígena da etnia Kahyana presente no Pará, conhecidos por suas práticas culturais e língua.", link: "https://pib.socioambiental.org/pt/Povo:Kahyana", tags: "Pará Para PA"},
     {titulo: "Kaiabi (Kayabi)", descricao: "Grupo indígena da etnia Kaiabi (Kayabi) que habita o Pará, com suas tradições culturais e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Kaiabi", tags: "Pará Para PA"},
     {titulo: "Katuenayana", descricao: "Povo indígena da etnia Katuenayana localizado no Pará, conhecidos por suas práticas culturais e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Katuenayana", tags: "Pará Para PA"},
     {titulo: "Katxuyana", descricao: "Grupo indígena da etnia Katxuyana presente no Pará, com rica tradição cultural e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Katxuyana", tags: "Pará Para PA"},
     {titulo: "Kuruaya", descricao: "Povo indígena da etnia Kuruaya localizado no Pará, conhecidos por suas práticas culturais e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Kuruaya", tags: "Pará Para PA"},
     {titulo: "Mebêngôkre (Kayapó)", descricao: "Grupo indígena da etnia Mebêngôkre (Kayapó) presente no Pará, com suas tradições culturais e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Mebeng%C3%B4kre", tags: "Pará Para PA"},
     {titulo: "Munduruku", descricao: "Os Munduruku estão situados em regiões e territórios diferentes nos estados do Pará (sudoeste, calha e afluentes do rio Tapajós.", link: "https://pib.socioambiental.org/pt/Povo:Munduruku", tags: "Pará Para PA"},

         // Paraíba
    {titulo: "Potiguara", descricao: "Povo indígena da etnia Potiguara localizado na Paraíba, conhecidos por suas tradições culturais e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Potiguara", tags: "Paraíba Paraiba PB"},
    {titulo: "Tremembé", descricao: "Grupo indígena da etnia Tremembé presente na Paraíba, com rica tradição cultural e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Trememb%C3%A9", tags: "Paraíba Paraiba PB"},
    
    // Pernambuco
    {titulo: "Atikum", descricao: "Povo indígena da etnia Atikum localizado em Pernambuco, conhecidos por suas práticas culturais e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Atikum", tags: "Pernambuco PE"},
    {titulo: "Pankararu", descricao: "Grupo indígena da etnia Pankararu presente em Pernambuco, com suas tradições culturais e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Pankararu", tags: "Pernambuco PE"},
    
    // Piauí
    {titulo: "Fulni-ô", descricao: "Povo indígena da etnia Fulni-ô localizado no Piauí, conhecidos por suas tradições culturais e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Fulni-%C3%94", tags: "Piauí Piaui PI"},
    {titulo: "Tremembé", descricao: "Grupo indígena da etnia Tremembé presente no Piauí, com rica tradição cultural e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Trememb%C3%A9", tags: "Piauí Piaui PI"},
    
    // Paraná
    {titulo: "Guarani", descricao: "Povo indígena da etnia Guarani localizado no Paraná, conhecidos por suas tradições culturais e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Guarani", tags: "Paraná Parana PR"},
    {titulo: "Kaingang", descricao: "Grupo indígena da etnia Kaingang presente no Paraná, com suas tradições culturais e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Kaingang", tags: "Paraná Parana PR"},
    
    // Rio de Janeiro
    {titulo: "Pataxó", descricao: "Povo indígena da etnia Pataxó localizado no Rio de Janeiro, conhecidos por suas práticas culturais e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Patax%C3%B3", tags: "Rio de Janeiro RJ"},
    {titulo: "Tupinambá", descricao: "Grupo indígena da etnia Tupinambá presente no Rio de Janeiro, com rica tradição cultural e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Tupinamb%C3%A1", tags: "Rio de Janeiro RJ"},

        // Rondônia
        {titulo: "Aikanã", descricao: "Povo indígena da etnia Aikanã localizado em Rondônia, conhecidos por suas práticas culturais e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Aikan%C3%A3", tags: "Rondônia Rondonia RO"},
        {titulo: "Arikapú", descricao: "Grupo indígena da etnia Arikapú presente em Rondônia, com tradições culturais e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Arikap%C3%BA", tags: "Rondônia Rondonia RO"},
        {titulo: "Guarani", descricao: "Povo indígena da etnia Guarani presente em Rondônia, conhecidos por suas práticas culturais e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Guarani", tags: "Rondônia Rondonia RO"},
        {titulo: "Karitiana", descricao: "Grupo indígena da etnia Karitiana localizado em Rondônia, com rica tradição cultural e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Karitiana", tags: "Rondônia Rondonia RO"},
        {titulo: "Makurap", descricao: "Povo indígena da etnia Makurap presente em Rondônia, conhecidos por suas práticas culturais e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Makurap", tags: "Rondônia Rondonia RO"},
        {titulo: "Munduruku", descricao: "Grupo indígena da etnia Munduruku localizado em Rondônia, com suas tradições culturais e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Munduruku", tags: "Rondônia Rondonia RO"},
        {titulo: "Uru-Eu-Wau-Wau", descricao: "Povo indígena da etnia Uru-Eu-Wau-Wau presente em Rondônia, conhecidos por suas práticas culturais e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Uru-Eu-Wau-Wau", tags: "Rondônia RO"},
        
        // Roraima
        {titulo: "Hixkaryana", descricao: "Povo indígena da etnia Hixkaryana localizado em Roraima, com rica tradição cultural e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Hixkaryana", tags: "Roraima RR"},
        {titulo: "Macuxi", descricao: "Grupo indígena da etnia Macuxi presente em Roraima, conhecidos por suas práticas culturais e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Macuxi", tags: "Roraima RR"},
        {titulo: "Yanomami", descricao: "Povo indígena da etnia Yanomami localizado em Roraima, com suas tradições culturais e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Yanomami", tags: "Roraima RR"},
        
        // Rio Grande do Sul
        {titulo: "Guarani", descricao: "Povo indígena da etnia Guarani localizado no Rio Grande do Sul, conhecidos por suas tradições culturais e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Guarani", tags: "Rio Grande do Sul RS"},
        {titulo: "Kaingang", descricao: "Grupo indígena da etnia Kaingang presente no Rio Grande do Sul, com rica tradição cultural e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Kaingang", tags: "Rio Grande do Sul RS"},
        
        // Sergipe
        {titulo: "Fulkaxó", descricao: "Povo indígena da etnia Fulkaxó localizado em Sergipe, conhecidos por suas práticas culturais e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Fulkax%C3%B3", tags: "Sergipe SE"},
        {titulo: "Xokó", descricao: "Grupo indígena da etnia Xokó presente em Sergipe, com suas tradições culturais e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Xok%C3%B3", tags: "Sergipe SE"},
        
        // São Paulo
        {titulo: "Guarani", descricao: "Povo indígena da etnia Guarani localizado em São Paulo, com suas tradições culturais e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Guarani", tags: "São Paulo Sao Paulo SP"},
        {titulo: "Kaingang", descricao: "Grupo indígena da etnia Kaingang presente em São Paulo, conhecidos por suas práticas culturais e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Kaingang", tags: "São Paulo Sao Paulo SP"},
        
        // Tocantins
        {titulo: "Apinayé", descricao: "Povo indígena da etnia Apinayé localizado em Tocantins, conhecidos por suas práticas culturais e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Apinay%C3%A9", tags: "Tocantins TO"},
        {titulo: "Avá-Canoeiro", descricao: "Grupo indígena da etnia Avá-Canoeiro presente em Tocantins, com suas tradições culturais e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Av%C3%A1-Canoeiro", tags: "Tocantins TO"},
        {titulo: "Guarani", descricao: "Povo indígena da etnia Guarani localizado em Tocantins, conhecidos por suas tradições culturais e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Guarani", tags: "Tocantins TO"},
        {titulo: "Iny Karajá", descricao: "Grupo indígena da etnia Iny Karajá presente em Tocantins, com suas práticas culturais e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Iny_Karaj%C3%A1", tags: "Tocantins TO"},
        {titulo: "Javaé", descricao: "Povo indígena da etnia Javaé localizado em Tocantins, conhecidos por suas tradições culturais e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Java%C3%A9", tags: "Tocantins TO"},
        {titulo: "Karajá do Norte", descricao: "Grupo indígena da etnia Karajá do Norte presente em Tocantins, com suas tradições culturais e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Karaj%C3%A1_do_Norte", tags: "Tocantins TO"},
        {titulo: "Krahô", descricao: "Povo indígena da etnia Krahô localizado em Tocantins, conhecidos por suas práticas culturais e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Krah%C3%B4", tags: "Tocantins TO"},
        {titulo: "Krahô-Kanela", descricao: "Grupo indígena da etnia Krahô-Kanela presente em Tocantins, com suas tradições culturais e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Krah%C3%B4-Kanela", tags: "Tocantins TO"},
        {titulo: "Tapirapé", descricao: "Povo indígena da etnia Tapirapé localizado em Tocantins, conhecidos por suas práticas culturais e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Tapirap%C3%A9", tags: "Tocantins TO"},
        {titulo: "Xerente", descricao: "Grupo indígena da etnia Xerente presente em Tocantins, com suas tradições culturais e língua própria.", link: "https://pib.socioambiental.org/pt/Povo:Xerente", tags: "Tocantins TO"},
];