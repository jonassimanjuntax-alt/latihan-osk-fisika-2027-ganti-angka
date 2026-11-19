import { PhysicsProblem } from '../types/physics';

export const PROBLEMS_PART_1: PhysicsProblem[] = [
  {
    id: 1,
    topic: 'Kinematika',
    title: 'Kurva Kecepatan terhadap Waktu Mobil Mainan',
    questionText:
      'Sebuah mobil mainan bergerak sepanjang garis lurus dan dapat digambarkan dalam kurva kecepatan ($\\text{m/s}$) pada sumbu-$y$ vs waktu (detik) pada sumbu-$x$ seperti pada grafik di bawah ini. Perpindahan maksimum mobil mainan tersebut dari awal hingga waktu $3$ detik adalah ... $\\text{m}$.',
    promptEnding: 'Perpindahan maksimum mobil mainan (dalam meter):',
    unit: 'm',
    answerValue: 10.5,
    answerFormatted: '10,5',
    tolerance: 0.1,
    hasStimulusDiagram: true,
    stimulusCaption:
      'Grafik kecepatan v (m/s) terhadap waktu t (s) mobil mainan dari t = 0 s hingga t = 3 s.',
    fbdCaption:
      'Interpretasi luas daerah di bawah kurva v(t) untuk perpindahan positif (0 hingga 2,5 s) dan perpindahan negatif (2,5 hingga 3 s).',
    explanation: {
      memahamiPermasalahan: [
        'Objek yang dianalisis adalah sebuah mobil mainan yang bergerak satu dimensi sepanjang garis lurus.',
        'Diketahui grafik kecepatan $v$ terhadap waktu $t$: pada $t = 0$ kecepatan awal $v(0) = 3\\text{ m/s}$, naik linear ke $6\\text{ m/s}$ pada $t = 1\\text{ s}$, konstan $6\\text{ m/s}$ hingga $t = 1{,}5\\text{ s}$, lalu turun linear menuju $-3\\text{ m/s}$ pada $t = 3\\text{ s}$.',
        'Besaran yang ditanyakan adalah perpindahan maksimum mobil mainan diukur dari posisi awal ($t = 0$) dalam selang waktu $0 \\le t \\le 3\\text{ s}$.',
        'Prinsip yang relevan adalah hubungan kinematika antara kecepatan dan perpindahan sebagai integral atau luas daerah di bawah grafik $v$-$t$.',
      ],
      pengetahuanAwal: [
        'Perpindahan $\\Delta x$ adalah perubahan posisi benda dari posisi awal ke posisi akhir, dan merupakan besaran vektor (memiliki tanda positif atau negatif sesuai arah gerak).',
        'Kecepatan sesaat $v(t) = \\frac{dx}{dt}$ menyatakan laju perubahan posisi terhadap waktu.',
        'Jika grafik $v(t)$ berada di atas sumbu waktu ($v > 0$), benda bergerak maju sehingga perpindahannya terus bertambah. Jika grafik turun ke bawah sumbu waktu ($v < 0$), benda berbalik arah sehingga perpindahan dari titik awal justru berkurang.',
      ],
      visualisasiFbd: [
        'Karena ini adalah soal kinematika grafik, visualisasi paling tepat adalah membagi kurva $v(t)$ menjadi beberapa segmen geometris (trapesium, persegi panjang, dan segitiga).',
        'Titik balik mobil terjadi tepat ketika garis miring terakhir memotong sumbu waktu ($v = 0$). Setelah titik tersebut, luas area bernilai negatif.',
      ],
      prinsipHukum: [
        'Kinematika Garis Lurus: Perpindahan total hingga waktu $t$ sama dengan luas bertanda (signed area) di bawah kurva kecepatan terhadap waktu dari $0$ sampai $t$.',
        'Nilai maksimum fungsi $\\Delta x(t)$ tercapai saat laju perubahannya $\\frac{d(\\Delta x)}{dt} = v(t) = 0$ dan berubah tanda dari positif ke negatif.',
      ],
      rumusUtama: [
        {
          label: 'Perpindahan sebagai Luas Kurva v–t',
          latex: '\\Delta x(t) = \\int_{0}^{t} v(\\tau)\\,d\\tau',
          explanation:
            'Perpindahan merupakan luas daerah antara kurva kecepatan dan sumbu waktu, bernilai positif di atas sumbu-$t$ dan negatif di bawah sumbu-$t$.',
          symbols: [
            '$\\Delta x(t)$: perpindahan pada saat $t$ ($\\text{m}$)',
            '$v(\\tau)$: kecepatan sesaat pada waktu $\\tau$ ($\\text{m/s}$)',
            '$t$: selang waktu pengamatan ($\\text{s}$)',
          ],
          validity: 'Berlaku untuk semua gerak satu dimensi dengan fungsi $v(t)$ yang terintegralkan.',
        },
        {
          label: 'Syarat Ekstremum Perpindahan',
          latex: 'v(t_{\\text{maks}}) = 0',
          explanation:
            'Perpindahan mencapai nilai maksimum tepat sebelum benda berbalik arah, yaitu ketika kecepatan sesaat menjadi nol.',
          symbols: ['$t_{\\text{maks}}$: waktu saat posisi terjauh tercapai ($\\text{s}$)'],
          validity: 'Berlaku jika $v(t)$ berubah tanda dari positif menjadi negatif.',
        },
      ],
      penurunanPersamaan: [
        'Pada selang $1{,}5\\text{ s} \\le t \\le 3{,}0\\text{ s}$, kecepatan berkurang secara linear dengan percepatan konstan $a = \\frac{-3 - 6}{3{,}0 - 1{,}5} = -6\\text{ m/s}^2$.',
        'Persamaan kecepatan pada selang ini adalah $v(t) = 6 - 6(t - 1{,}5)$. Saat $v(t) = 0$, diperoleh $t - 1{,}5 = 1{,}0 \\implies t = 2{,}5\\text{ s}$.',
      ],
      langkahPenyelesaian: [
        'Diketahui titik-titik simpul kurva: $(0; 3)$, $(1; 6)$, $(1{,}5; 6)$, $(2{,}5; 0)$, dan $(3; -3)$.',
        'Ditanyakan: perpindahan maksimum $\\Delta x_{\\text{maks}}$ pada $0 \\le t \\le 3\\text{ s}$.',
        'Menghitung luas segmen 1 ($0 \\le t \\le 1\\text{ s}$, trapesium): $L_1 = \\frac{3 + 6}{2} \\times (1 - 0) = 4{,}5\\text{ m}$.',
        'Menghitung luas segmen 2 ($1 \\le t \\le 1{,}5\\text{ s}$, persegi panjang): $L_2 = 6 \\times (1{,}5 - 1) = 3{,}0\\text{ m}$.',
        'Menghitung luas segmen 3 ($1{,}5 \\le t \\le 2{,}5\\text{ s}$, segitiga di atas sumbu-$t$): $L_3 = \\frac{1}{2} \\times (2{,}5 - 1{,}5) \\times 6 = 3{,}0\\text{ m}$.',
        'Total perpindahan maksimum hingga $t = 2{,}5\\text{ s}$ adalah $\\Delta x_{\\text{maks}} = 4{,}5 + 3{,}0 + 3{,}0 = 10{,}5\\text{ m}$.',
      ],
      jawabanAkhirCatatan: 'Perpindahan maksimum mobil mainan adalah 10,5 m (tercapai pada t = 2,5 detik).',
      pemeriksaanFisika: [
        'Jika kita menghitung hingga $t = 3\\text{ s}$, segmen $2{,}5 \\le t \\le 3\\text{ s}$ memberi luas negatif $L_4 = -\\frac{1}{2}(0{,}5)(3) = -0{,}75\\text{ m}$, sehingga posisi akhir pada $t = 3\\text{ s}$ menjadi $9{,}75\\text{ m} < 10{,}5\\text{ m}$.',
        'Jadi perpindahan maksimum benar terjadi pada $t = 2{,}5\\text{ s}$ sebesar $10{,}5\\text{ m}$, dengan satuan meter yang konsisten ($\\text{m/s} \\times \\text{s} = \\text{m}$).',
      ],
    },
    narration: {
      soal: 'Soal nomor 1, topik Kinematika. Sebuah mobil mainan bergerak sepanjang garis lurus yang dinyatakan dalam kurva kecepatan dalam meter per sekon pada sumbu y terhadap waktu dalam detik pada sumbu x. Tentukan perpindahan maksimum mobil mainan tersebut dari awal hingga waktu 3 detik.',
      stimulus:
        'Perhatikan grafik kecepatan terhadap waktu. Mobil mulai dengan kecepatan 3 meter per sekon pada t sama dengan nol, lalu dipercepat beraturan menjadi 6 meter per sekon saat t sama dengan 1 detik. Selanjutnya kecepatan bertahan konstan 6 meter per sekon sampai t sama dengan 1,5 detik, kemudian diperlambat beraturan hingga mencapai minus 3 meter per sekon pada t sama dengan 3 detik.',
      fbd: 'Untuk grafik kinematika, kita tidak memakai diagram gaya, melainkan pembagian luas area di bawah kurva v terhadap t. Area di atas sumbu waktu menunjukkan mobil bergerak maju, sedangkan area segitiga di bawah sumbu waktu setelah 2,5 detik menunjukkan mobil bergerak mundur.',
      pengetahuanAwal:
        'Ingat konsep dasar kinematika: perpindahan adalah luas bertanda di bawah kurva kecepatan terhadap waktu. Selama kecepatan bernilai positif, jarak dari titik awal terus bertambah. Begitu kecepatan menjadi negatif, benda berbalik arah sehingga perpindahan totalnya mulai berkurang.',
      prinsip:
        'Prinsip utama yang dipakai adalah integral kecepatan terhadap waktu, serta syarat ekstremum bahwa perpindahan maksimum tercapai tepat pada saat kecepatan bernilai nol sebelum berubah menjadi negatif.',
      rumus:
        'Perpindahan delta x sama dengan integral v terhadap t dari nol sampai t. Perpindahan maksimum tercapai saat v sama dengan nol. Untuk segmen trapesium, luas sama dengan setengah dikalikan jumlah sisi sejajar dikalikan selang waktu. Untuk segmen segitiga, luas sama dengan setengah alas dikalikan tinggi.',
      langkah:
        'Mari kita hitung langkah demi langkah. Pertama, tentukan kapan kecepatan bernilai nol. Antara 1,5 sampai 3 detik, kecepatan turun dari 6 ke minus 3, sehingga percepatannya minus 6 meter per sekon kuadrat. Kecepatan menjadi nol tepat pada t sama dengan 2,5 detik. Kedua, jumlahkan luas daerah positif: segmen pertama berbentuk trapesium dengan luas setengah kali 3 tambah 6 kali 1 sama dengan 4,5 meter. Segmen kedua berbentuk persegi panjang dengan luas 6 kali 0,5 sama dengan 3,0 meter. Segmen ketiga berbentuk segitiga dengan luas setengah kali 1 kali 6 sama dengan 3,0 meter. Jumlah ketiganya adalah 10,5 meter.',
      jawabanAkhir:
        'Jadi, jawaban akhir perpindahan maksimum mobil mainan adalah 10,5 meter. Hasil ini masuk akal karena setelah 2,5 detik mobil berbalik arah sejauh 0,75 meter sehingga pada detik ketiga posisinya berkurang menjadi 9,75 meter.',
    },
  },
  {
    id: 2,
    topic: 'Kinematika',
    title: 'Dua Lintasan Peluru dengan Jangkauan Sama',
    questionText:
      'Gambar berikut menampilkan lintasan sebuah peluru yang ditembakkan dua kali dari tanah dengan kecepatan awal yang sama dan menempuh dua lintasan yang berbeda. Anggap tidak ada hambatan udara. Percepatan gravitasi sama dengan $g$. Nilai $\\dfrac{7R}{g t_1 t_2}$ adalah ...',
    promptEnding: 'Nilai tak berdimensi 7R / (g · t₁ · t₂):',
    unit: '',
    answerValue: 3.5,
    answerFormatted: '3,5',
    tolerance: 0.05,
    hasStimulusDiagram: true,
    stimulusCaption:
      'Dua lintasan parabola peluru dengan laju awal identik yang mencapai jangkauan mendatar R yang sama, dengan waktu tempuh masing-masing t₁ dan t₂.',
    fbdCaption:
      'Komponen kecepatan awal v₀ untuk dua sudut elevasi komplementer θ₁ dan θ₂ = 90° - θ₁ di bawah percepatan gravitasi g ke bawah.',
    explanation: {
      memahamiPermasalahan: [
        'Peluru ditembakkan dua kali dari permukaan tanah datar dengan kelajuan awal $v_0$ yang sama, menghasilkan dua lintasan parabola berbeda namun jatuh di titik yang sama pada jarak mendatar $R$.',
        'Waktu tempuh masing-masing lintasan adalah $t_1$ dan $t_2$, dan percepatan gravitasi konstan sebesar $g$ mengarah ke bawah.',
        'Kita diminta menentukan nilai perbandingan tak berdimensi $\\frac{7R}{g t_1 t_2}$.',
      ],
      pengetahuanAwal: [
        'Gerak parabola tanpa hambatan udara dapat diuraikan menjadi gerak lurus beraturan (GLB) pada sumbu horizontal ($a_x = 0$) dan gerak lurus berubah beraturan (GLBB) pada sumbu vertikal ($a_y = -g$).',
        'Jika sudut tembak terhadap horizontal adalah $\\theta$, komponen kecepatan awalnya adalah $v_{0x} = v_0 \\cos\\theta$ dan $v_{0y} = v_0 \\sin\\theta$.',
        'Dua sudut tembak yang saling berpenyiku ($\\theta_1 + \\theta_2 = 90^\\circ$) menghasilkan jangkauan mendatar $R$ yang sama karena $\\sin(2\\theta_1) = \\sin(2(90^\\circ - \\theta_1))$.',
      ],
      visualisasiFbd: [
        'Pada saat peluru berada di udara, satu-satunya gaya yang bekerja hanyalah gaya gravitasi $mg$ vertikal ke bawah.',
        'Lintasan yang lebih tinggi memiliki sudut elevasi $\\theta_2 > 45^\\circ$ sehingga komponen vertikal $v_0 \\sin\\theta_2$ lebih besar dan waktu tempuh $t_2$ lebih lama, sedangkan lintasan yang lebih landai memiliki $\\theta_1 = 90^\\circ - \\theta_2 < 45^\\circ$ dan waktu tempuh $t_1$ lebih singkat.',
      ],
      prinsipHukum: [
        'Kinematika Gerak Peluru (Gerak Parabola) dan sifat simetri trigonometri untuk sudut-sudut komplementer.',
      ],
      rumusUtama: [
        {
          label: 'Waktu Tempuh Total di Tanah Datar',
          latex: 't = \\frac{2 v_0 \\sin\\theta}{g}',
          explanation:
            'Waktu peluru kembali ke ketinggian awal diperoleh dari $y(t) = v_0\\sin\\theta \\cdot t - \\frac{1}{2}gt^2 = 0$.',
          symbols: [
            '$t$: waktu tempuh ($\\text{s}$)',
            '$v_0$: kelajuan awal ($\\text{m/s}$)',
            '$\\theta$: sudut elevasi ($\\text{rad}$ atau $^\\circ$)',
            '$g$: percepatan gravitasi ($\\text{m/s}^2$)',
          ],
          validity: 'Berlaku bila titik tembak dan titik jatuh berada pada ketinggian yang sama tanpa hambatan udara.',
        },
        {
          label: 'Jangkauan Mendatar Maksimum',
          latex: 'R = \\frac{v_0^2 \\sin(2\\theta)}{g} = \\frac{2 v_0^2 \\sin\\theta \\cos\\theta}{g}',
          explanation:
            'Jarak horizontal merupakan hasil kali kecepatan horizontal konstan $v_0\\cos\\theta$ dengan waktu tempuh $t$.',
          symbols: ['$R$: jangkauan mendatar ($\\text{m}$)'],
          validity: 'Berlaku pada medan gravitasi seragam dan tanah horizontal.',
        },
      ],
      penurunanPersamaan: [
        'Karena kelajuan awal sama dan jangkauan mendatar kedua tembakan juga sama ($R_1 = R_2 = R$), maka $\\sin(2\\theta_1) = \\sin(2\\theta_2)$. Untuk dua lintasan berbeda, haruslah $2\\theta_2 = 180^\\circ - 2\\theta_1$, sehingga $\\theta_2 = 90^\\circ - \\theta_1$.',
        'Akibatnya $\\sin\\theta_2 = \\cos\\theta_1$, sehingga waktu tempuh kedua adalah $t_2 = \\frac{2 v_0 \\cos\\theta_1}{g}$.',
        'Kalikan $t_1$ dan $t_2$: $$t_1 t_2 = \\left(\\frac{2 v_0 \\sin\\theta_1}{g}\\right)\\left(\\frac{2 v_0 \\cos\\theta_1}{g}\\right) = \\frac{2}{g}\\left(\\frac{2 v_0^2 \\sin\\theta_1 \\cos\\theta_1}{g}\\right) = \\frac{2R}{g}$$',
        'Dari hasil tersebut diperoleh $\\frac{R}{g t_1 t_2} = \\frac{1}{2}$.',
      ],
      langkahPenyelesaian: [
        'Diketahui dua lintasan memiliki $v_0$ dan $R$ yang sama dengan waktu tempuh $t_1$ dan $t_2$.',
        'Ditanyakan nilai $\\dfrac{7R}{g t_1 t_2}$.',
        'Gunakan hubungan $t_1 t_2 = \\dfrac{2R}{g}$, sehingga $\\dfrac{R}{g t_1 t_2} = \\dfrac{1}{2} = 0{,}5$.',
        'Kalikan dengan faktor $7$: $\\dfrac{7R}{g t_1 t_2} = 7 \\times 0{,}5 = 3{,}5$.',
      ],
      jawabanAkhirCatatan: 'Nilai 7R / (g t₁ t₂) sama dengan 3,5 (besaran tak berdimensi).',
      pemeriksaanFisika: [
        'Periksa dimensi: $R$ bersatuan meter ($\text{m}$), sedangkan $g t_1 t_2$ bersatuan $(\\text{m/s}^2) \\cdot \\text{s} \\cdot \\text{s} = \\text{m}$. Jadi hasil baginya tidak berdimensi.',
        'Uji kasus khusus sudut $45^\\circ$: bila $\\theta_1 \\to 45^\\circ$ dan $\\theta_2 \\to 45^\\circ$, maka $t_1 = t_2 = \\frac{\\sqrt{2}v_0}{g}$ dan $R = \\frac{v_0^2}{g}$, sehingga $g t_1 t_2 = \\frac{2v_0^2}{g} = 2R$. Maka $\\frac{7R}{2R} = 3{,}5$. Konsisten!',
      ],
    },
    narration: {
      soal: 'Soal nomor 2, topik Kinematika. Gambar menampilkan lintasan sebuah peluru yang ditembakkan dua kali dari tanah dengan kecepatan awal yang sama dan menempuh dua lintasan yang berbeda dengan jangkauan R yang sama. Anggap tidak ada hambatan udara dan percepatan gravitasi sama dengan g. Tentukan nilai 7 R dibagi g kali t 1 kali t 2.',
      stimulus:
        'Pada gambar tampak dua kurva parabola berbeda yang berawal dari titik asal yang sama dan berakhir di jarak mendatar R yang sama. Lintasan pertama lebih rendah dengan waktu tempuh t 1, sedangkan lintasan kedua lebih tinggi dengan waktu tempuh t 2.',
      fbd: 'Selama peluru melayang, hanya gaya berat m kali g yang bekerja ke bawah, sehingga komponen percepatan mendatar adalah nol dan komponen vertikal adalah minus g.',
      pengetahuanAwal:
        'Agar dua tembakan dengan kelajuan awal yang sama menghasilkan jarak jangkauan mendatar R yang identik, kedua sudut elevasinya harus saling berpenyiku, yaitu theta 1 ditambah theta 2 sama dengan 90 derajat.',
      prinsip:
        'Kita menggunakan kinematika gerak parabola, khususnya persamaan waktu tempuh total dan jangkauan mendatar serta identitas trigonometri sinus sudut berpenyiku.',
      rumus:
        'Waktu tempuh t sama dengan 2 dikali v nol dikali sinus theta dibagi g. Sementara jangkauan R sama dengan 2 dikali v nol kuadrat dikali sinus theta dikali kosinus theta dibagi g.',
      langkah:
        'Karena theta 2 sama dengan 90 derajat dikurangi theta 1, maka sinus theta 2 sama dengan kosinus theta 1. Jika t 1 dan t 2 dikalikan, hasilnya adalah 4 v nol kuadrat sinus theta 1 kosinus theta 1 dibagi g kuadrat, yang persis sama dengan 2 R dibagi g. Dengan demikian, R dibagi g kali t 1 kali t 2 bernilai tepat setengah atau 0,5. Karena soal meminta 7 R dibagi g kali t 1 kali t 2, kita kalikan 7 dengan 0,5 sehingga menghasilkan 3,5.',
      jawabanAkhir:
        'Jadi, jawaban akhirnya adalah 3,5 tanpa satuan. Dimensinya konsisten karena pembilang R bersatuan meter dan penyebut g kali t kuadrat juga bersatuan meter.',
    },
  },
  {
    id: 3,
    topic: 'Kinematika',
    title: 'Dua Benda dengan Vektor Kecepatan Saling Tegak Lurus',
    questionText:
      'Dua buah benda bergerak dalam medan gravitasi homogen dengan percepatan $g = 9{,}8\\text{ m/s}^2$. Pada saat awal, benda-benda tersebut terletak di satu titik dan bergerak dengan kecepatan $v_1 = 4{,}5\\text{ m/s}$ dan $v_2 = 8{,}0\\text{ m/s}$ secara horizontal dalam arah yang berlawanan. Jarak antara kedua benda pada saat vektor kecepatan mereka menjadi saling tegak lurus adalah ... $\\text{m}$.',
    promptEnding: 'Jarak antara kedua benda (dalam meter):',
    unit: 'm',
    answerValue: 7.7,
    answerFormatted: '7,7',
    tolerance: 0.1,
    hasStimulusDiagram: true,
    stimulusCaption:
      'Dua benda dilemparkan dari satu titik awal secara mendatar ke kiri dan ke kanan dengan kelajuan v₁ = 4,5 m/s dan v₂ = 8,0 m/s dalam medan gravitasi g.',
    fbdCaption:
      'Diagram vektor kecepatan v⃗₁(t) dan v⃗₂(t) pada saat kedua vektor membentuk sudut 90° satu sama lain.',
    explanation: {
      memahamiPermasalahan: [
        'Dua benda dilontarkan bersamaan dari posisi awal yang sama dengan kecepatan awal murni horizontal ke arah yang berlawanan: $v_1 = 4{,}5\\text{ m/s}$ dan $v_2 = 8{,}0\\text{ m/s}$.',
        'Keduanya mengalami percepatan gravitasi homogen $g = 9{,}8\\text{ m/s}^2$ ke bawah.',
        'Kita diminta menentukan jarak antara kedua benda tepat pada saat vektor kecepatan $\\vec{v}_1(t)$ dan $\\vec{v}_2(t)$ saling tegak lurus.',
      ],
      pengetahuanAwal: [
        'Kecepatan sesaat dalam gerak parabola dua dimensi adalah vektor $\\vec{v}(t) = v_x \\hat{i} + v_y(t) \\hat{j}$.',
        'Dua vektor $\\vec{v}_1$ dan $\\vec{v}_2$ saling tegak lurus jika dan hanya jika hasil kali titik (dot product) keduanya bernilai nol: $\\vec{v}_1 \\cdot \\vec{v}_2 = 0$.',
        'Karena kedua benda mulai dari ketinggian yang sama dengan komponen kecepatan vertikal awal sama-sama nol, posisi vertikal $y(t) = -\\frac{1}{2}gt^2$ keduanya selalu identik setiap saat.',
      ],
      visualisasiFbd: [
        'Pada saat $t$, benda 1 memiliki vektor kecepatan $(v_1,\\,-gt)$ dan benda 2 memiliki vektor kecepatan $(-v_2,\\,-gt)$.',
        'Karena ketinggiannya selalu sama, garis penghubung kedua benda selalu sejajar sumbu horizontal, sehingga jarak pisahnya hanyalah penjumlahan jarak mendatar masing-masing: $d = (v_1 + v_2)t$.',
      ],
      prinsipHukum: [
        'Kinematika 2D (Superposisi Gerak Horizontal dan Vertikal) serta Aljabar Vektor (syarat ortogonalitas dot product).',
      ],
      rumusUtama: [
        {
          label: 'Syarat Kecepatan Saling Tegak Lurus',
          latex: '\\vec{v}_1(t) \\cdot \\vec{v}_2(t) = 0',
          explanation:
            'Perkalian titik dua vektor sama dengan nol ketika sudut di antara keduanya $90^\\circ$.',
          symbols: [
            '$\\vec{v}_1(t) = v_1\\hat{i} - gt\\hat{j}$: vektor kecepatan benda 1',
            '$\\vec{v}_2(t) = -v_2\\hat{i} - gt\\hat{j}$: vektor kecepatan benda 2',
          ],
          validity: 'Berlaku selama kedua benda masih bergerak bebas di dalam medan gravitasi seragam.',
        },
        {
          label: 'Jarak Pisah Kedua Benda',
          latex: 'd = (v_1 + v_2)t = \\frac{(v_1 + v_2)\\sqrt{v_1 v_2}}{g}',
          explanation:
            'Karena $y_1(t) = y_2(t)$, jarak pisah hanya ditentukan oleh perpindahan horizontal relatif.',
          symbols: [
            '$d$: jarak antar benda ($\\text{m}$)',
            '$t$: waktu hingga vektor kecepatan tegak lurus ($\\text{s}$)',
          ],
          validity: 'Berlaku bila kedua benda dilepas dari titik yang sama dengan $v_{1y}(0) = v_{2y}(0)$.',
        },
      ],
      penurunanPersamaan: [
        'Hitung dot product kedua vektor kecepatan: $$\\vec{v}_1 \\cdot \\vec{v}_2 = (v_1)(-v_2) + (-gt)(-gt) = -v_1 v_2 + g^2 t^2 = 0$$',
        'Diperoleh waktu saat keduanya saling tegak lurus: $$t = \\frac{\\sqrt{v_1 v_2}}{g}$$',
        'Substitusikan ke dalam jarak horizontal relatif $d = (v_1 + v_2)t$: $$d = \\frac{(v_1 + v_2)\\sqrt{v_1 v_2}}{g}$$',
      ],
      langkahPenyelesaian: [
        'Diketahui: $v_1 = 4{,}5\\text{ m/s}$, $v_2 = 8{,}0\\text{ m/s}$, $g = 9{,}8\\text{ m/s}^2$.',
        'Ditanyakan: jarak $d$ ketika $\\vec{v}_1 \\perp \\vec{v}_2$.',
        'Hitung waktu $t$: $t = \\frac{\\sqrt{4{,}5 \\times 8{,}0}}{9{,}8} = \\frac{\\sqrt{36{,}0}}{9{,}8} = \\frac{6{,}0}{9{,}8}\\text{ s} \\approx 0{,}6122\\text{ s}$.',
        'Hitung jarak $d$: $d = (4{,}5 + 8{,}0) \\times \\frac{6{,}0}{9{,}8} = \\frac{12{,}5 \\times 6{,}0}{9{,}8} = \\frac{75{,}0}{9{,}8} = 7{,}65306...\\text{ m}$.',
        'Dibulatkan satu angka di belakang koma menjadi $7{,}7\\text{ m}$.',
      ],
      jawabanAkhirCatatan: 'Jarak antara kedua benda saat kecepatannya saling tegak lurus adalah 7,7 m.',
      pemeriksaanFisika: [
        'Pada $t = 0{,}6122\\text{ s}$, komponen vertikal $v_y = -gt = -6{,}0\\text{ m/s}$. Periksa gradien vektor kecepatan: $(6{,}0/4{,}5) \\times (6{,}0/8{,}0) = \\frac{36}{36} = 1$, artinya hasil kali kemiringannya $-1$ (benar saling tegak lurus!).',
        'Dimensi hasil: $\\frac{(\\text{m/s})\\sqrt{(\\text{m/s})^2}}{\\text{m/s}^2} = \\text{m}$, tepat bersatuan jarak.',
      ],
    },
    narration: {
      soal: 'Soal nomor 3, topik Kinematika. Dua buah benda bergerak dalam medan gravitasi homogen dengan percepatan g sama dengan 9,8 meter per sekon kuadrat. Pada saat awal, keduanya berada di satu titik dan bergerak horizontal berlawanan arah dengan kecepatan v 1 sama dengan 4,5 meter per sekon dan v 2 sama dengan 8,0 meter per sekon. Tentukan jarak antara kedua benda saat vektor kecepatan mereka menjadi saling tegak lurus.',
      stimulus:
        'Bayangkan dua partikel diluncurkan dari titik yang sama ke kiri dan ke kanan secara mendatar. Keduanya jatuh bersama ke bawah sambil bergerak saling menjauh ke samping.',
      fbd: 'Vektor kecepatan benda satu memiliki komponen mendatar positif v 1 dan komponen vertikal minus g t. Vektor kecepatan benda dua memiliki komponen mendatar negatif minus v 2 dan komponen vertikal minus g t. Keduanya membentuk sudut 90 derajat pada saat tertentu.',
      pengetahuanAwal:
        'Dua vektor dikatakan saling tegak lurus apabila hasil kali titik atau dot product keduanya sama dengan nol. Selain itu, karena keduanya jatuh bebas secara vertikal dengan laju jatuh yang selalu identik, ketinggian mereka selalu sama sehingga jarak pisahnya murni horizontal.',
      prinsip:
        'Kita menerapkan prinsip superposisi gerak parabola dua dimensi dan syarat ortogonalitas dua vektor kecepatan.',
      rumus:
        'Dot product v 1 dan v 2 sama dengan minus v 1 kali v 2 ditambah g kuadrat t kuadrat sama dengan nol, sehingga t sama dengan akar dari v 1 kali v 2 dibagi g. Kemudian jarak d sama dengan jumlah v 1 dan v 2 dikalikan waktu t.',
      langkah:
        'Langkah penyelesaian: substitusikan v 1 sebesar 4,5 dan v 2 sebesar 8,0. Hasil kali keduanya adalah 36,0, dan akar dari 36,0 adalah 6,0. Maka waktu t sama dengan 6,0 dibagi 9,8 detik. Selanjutnya, kelajuan saling menjauh adalah 4,5 ditambah 8,0 yaitu 12,5 meter per sekon. Kalikan 12,5 dengan 6,0 dibagi 9,8, kita dapatkan 75 dibagi 9,8 sama dengan 7,653 meter. Dibulatkan satu angka di belakang koma menjadi 7,7 meter.',
      jawabanAkhir:
        'Jadi, jarak antara kedua benda saat vektor kecepatannya saling tegak lurus adalah 7,7 meter.',
    },
  },
  {
    id: 4,
    topic: 'Kinematika',
    title: 'Gerak Mengejar Delapan Partikel pada Segidelapan Beraturan',
    questionText:
      'Delapan partikel kecil diletakkan masing-masing pada titik sudut sebuah segidelapan beraturan. Setiap partikel bergerak dengan besar kecepatan konstan, namun arahnya selalu mengikuti partikel lain di sebelahnya (searah jarum jam secara berurutan). Gerakan tersebut terus berlangsung hingga semua partikel bertemu. Jarak tempuh dan perpindahan salah satu partikel hingga bertemu yang lainnya masing-masing adalah $a$ dan $b$. Nilai perbandingan $a$ dan $b$ adalah ...',
    promptEnding: 'Nilai perbandingan tak berdimensi a / b:',
    unit: '',
    answerValue: 2.6,
    answerFormatted: '2,6',
    tolerance: 0.05,
    hasStimulusDiagram: true,
    stimulusCaption:
      'Delapan partikel pada titik-titik sudut segidelapan beraturan, masing-masing bergerak dengan kelajuan konstan mengarah ke partikel tetangganya.',
    fbdCaption:
      'Analisis kecepatan relatif sepanjang garis penghubung dua partikel bertetangga dan simetri lintasan spiral menuju pusat segidelapan.',
    explanation: {
      memahamiPermasalahan: [
        'Terdapat $n = 8$ partikel identik yang awalnya berada di titik sudut suatu segidelapan beraturan dengan panjang sisi $L$.',
        'Setiap partikel bergerak dengan laju konstan $v$, dan vektor kecepatannya selalu mengarah tepat ke partikel tetangga di sebelahnya.',
        'Karena simetri penuh, segidelapan tersebut berputar dan mengecil hingga seluruh partikel bertemu di titik pusat segidelapan.',
        'Jarak tempuh lintasan melengkung satu partikel adalah $a$, dan besar perpindahan lurusnya dari sudut awal ke pusat segidelapan adalah $b$. Kita mencari rasio $a / b$.',
      ],
      pengetahuanAwal: [
        'Jarak tempuh ($a$) adalah panjang total lintasan spiral yang dilalui partikel, sedangkan perpindahan ($b$) adalah jarak terpendek (garis lurus) dari posisi awal di titik sudut ke posisi akhir di pusat segidelapan.',
        'Pada segi-$n$ beraturan dengan sisi $L$, sudut pusat antar dua titik sudut bersebelahan adalah $\\frac{2\\pi}{n} = \\frac{360^\\circ}{8} = 45^\\circ$, sehingga jari-jari lingkaran luar (jarak titik sudut ke pusat) adalah $R = \\frac{L}{2\\sin(\\pi/n)}$.',
      ],
      visualisasiFbd: [
        'Tinjau dua partikel bertetangga A dan B dengan jarak sesaat $s(t)$. Arah gerak A tepat sepanjang garis AB dengan laju $v$.',
        'Sementara itu, partikel B bergerak menuju partikel C berikutnya; vektor kecepatan B membentuk sudut luar segidelapan $\\phi = \\frac{2\\pi}{n} = 45^\\circ$ terhadap garis AB.',
      ],
      prinsipHukum: [
        'Kinematika Kecepatan Relatif dan Simetri Geometri Segi-$n$ Beraturan.',
      ],
      rumusUtama: [
        {
          label: 'Laju Perubahan Jarak Antar Partikel',
          latex: '\\frac{ds}{dt} = -v\\left(1 - \\cos\\frac{2\\pi}{n}\\right) = -2v\\sin^2\\left(\\frac{\\pi}{n}\\right)',
          explanation:
            'Komponen kecepatan B yang menjauhi A sepanjang garis hubung adalah $v\\cos(2\\pi/n)$, sedangkan A mendekati B dengan laju penuh $v$.',
          symbols: [
            '$s$: jarak antara dua partikel bertetangga ($\\text{m}$)',
            '$v$: kelajuan konstan setiap partikel ($\\text{m/s}$)',
            '$n$: jumlah sisi/partikel ($n = 8$)',
          ],
          validity: 'Berlaku selama konfigurasi tetap mempertahankan kesimetrian segi-$n$ beraturan.',
        },
        {
          label: 'Perbandingan Jarak Tempuh terhadap Perpindahan',
          latex: '\\frac{a}{b} = \\frac{1}{\\sin(\\pi/n)}',
          explanation:
            'Hasil bagi panjang lintasan spiral $a = vT$ dengan jari-jari lingkaran luar $b = R$.',
          symbols: [
            '$a$: panjang lintasan tempuh ($\\text{m}$)',
            '$b$: besar perpindahan ke pusat ($\\text{m}$)',
          ],
          validity: 'Berlaku untuk sembarang segi-$n$ beraturan ($n \\ge 3$).',
        },
      ],
      penurunanPersamaan: [
        'Karena $\\frac{ds}{dt}$ konstan, waktu total $T$ hingga jarak $s$ menyusut dari $L$ menjadi $0$ adalah: $$T = \\frac{L}{2v\\sin^2(\\pi/n)}$$',
        'Jarak tempuh tiap partikel adalah $a = vT = \\frac{L}{2\\sin^2(\\pi/n)}$.',
        'Besar perpindahan dari titik sudut ke pusat segidelapan adalah jari-jari lingkaran luarnya: $$b = R = \\frac{L}{2\\sin(\\pi/n)}$$',
        'Dengan membagi keduanya, $L$ dan faktor $2$ saling meniadakan: $$\\frac{a}{b} = \\frac{L / (2\\sin^2(\\pi/n))}{L / (2\\sin(\\pi/n))} = \\frac{1}{\\sin(\\pi/n)}$$',
      ],
      langkahPenyelesaian: [
        'Diketahui segidelapan beraturan ($n = 8$).',
        'Ditanyakan rasio $\\frac{a}{b}$.',
        'Hitung sudut $\\frac{\\pi}{n} = \\frac{180^\\circ}{8} = 22{,}5^\\circ$.',
        'Nilai $\\sin(22{,}5^\\circ) = \\sqrt{\\frac{1 - \\cos 45^\\circ}{2}} = \\sqrt{\\frac{2 - \\sqrt{2}}{4}} \\approx 0{,}382683$.',
        'Maka $\\frac{a}{b} = \\frac{1}{0{,}382683} = 2{,}613126...$',
        'Dibulatkan satu angka di belakang koma menjadi $2{,}6$.',
      ],
      jawabanAkhirCatatan: 'Perbandingan jarak tempuh dan perpindahan a / b adalah 2,6.',
      pemeriksaanFisika: [
        'Jarak tempuh $a$ harus selalu lebih besar daripada besar perpindahan lurus $b$, sehingga rasio $a/b > 1$. Nilai $2{,}6 > 1$ memenuhi syarat geometris ini.',
        'Sebagai pembanding: untuk segitiga ($n=3$), $a/b = 1/\\sin 60^\\circ \\approx 1{,}15$; untuk persegi ($n=4$), $a/b = \\sqrt{2} \\approx 1{,}41$; untuk segilima ($n=5$), $a/b \\approx 1{,}70$; sehingga untuk segidelapan ($n=8$) lintasan semakin melingkar dan $a/b = 2{,}6$ sangat masuk akal.',
      ],
    },
    narration: {
      soal: 'Soal nomor 4, topik Kinematika. Delapan partikel kecil diletakkan masing-masing pada titik sudut sebuah segidelapan beraturan. Setiap partikel bergerak dengan besar kecepatan konstan, namun arahnya selalu mengikuti partikel lain di sebelahnya hingga semua partikel bertemu. Jarak tempuh dan perpindahan salah satu partikel masing-masing adalah a dan b. Tentukan nilai perbandingan a dan b.',
      stimulus:
        'Pada ilustrasi terlihat delapan titik partikel di sudut-sudut segidelapan beraturan dengan panah kecepatan dari tiap partikel mengarah ke partikel tetangganya searah keliling poligon.',
      fbd: 'Kita mengamati kecepatan relatif antara dua partikel bertetangga A dan B. Partikel A bergerak lurus ke B dengan laju v, sementara B bergerak menuju C membentuk sudut luar 45 derajat terhadap garis A B.',
      pengetahuanAwal:
        'Karena simetri, bentuk poligon tidak pernah berubah selain berputar dan menyusut ke pusat. Perpindahan b adalah jarak lurus dari sudut awal ke pusat, sedangkan jarak tempuh a adalah panjang lintasan spiral yang dilalui partikel.',
      prinsip:
        'Kita menggunakan konsep kecepatan relatif sepanjang garis penghubung dua partikel bertetangga dan geometri segi-n beraturan.',
      rumus:
        'Laju berkurangnya jarak antar partikel sama dengan minus 2 v dikali sinus kuadrat pi per n. Dari sini perbandingan jarak tempuh a dibagi perpindahan b sama dengan satu dibagi sinus pi per n.',
      langkah:
        'Untuk segidelapan beraturan, n sama dengan 8. Sudut pi dibagi n adalah 180 derajat dibagi 8, yaitu 22,5 derajat. Nilai sinus 22,5 derajat sekitar 0,3827. Jadi perbandingan a per b sama dengan 1 dibagi 0,3827, hasilnya 2,613. Dibulatkan satu angka di belakang koma menjadi 2,6.',
      jawabanAkhir:
        'Jadi, perbandingan jarak tempuh dan perpindahan adalah 2,6. Hasil ini lebih besar dari satu sebagaimana mestinya karena lintasan lengkung selalu lebih panjang dari garis lurus.',
    },
  },
  {
    id: 5,
    topic: 'Hukum Newton',
    title: 'Kesetimbangan Dua Massa pada Kereta Bidang Miring Ganda',
    questionText:
      'Pada sistem tanpa gesekan seperti pada gambar di bawah ini, nilai $\\sin\\alpha = 5/13$. Ketika pada kereta diberikan percepatan ke arah kanan sebesar $0{,}7g$ ternyata $m_1$ maupun $m_2$ tidak bergerak relatif terhadap kereta. Anggap katrol dan tali tidak bermassa. Jika $m_1 / m_2 = 1{,}3$, nilai $10\\sin\\beta - 7\\cos\\beta$ sama dengan ...',
    promptEnding: 'Nilai 10·sin(β) - 7·cos(β):',
    unit: '',
    answerValue: 3.4,
    answerFormatted: '3,4',
    tolerance: 0.05,
    hasStimulusDiagram: true,
    stimulusCaption:
      'Kereta berbentuk bidang miring ganda dengan sudut α di sisi kiri dan β di sisi kanan dipercepat ke kanan sebesar a = 0,7g.',
    fbdCaption:
      'Diagram benda bebas m₁ dan m₂ dalam kerangka acuan non-inersial kereta (dengan gaya fiktif m·a ke kiri) yang masing-masing berada dalam keadaan diam relatif terhadap kereta.',
    explanation: {
      memahamiPermasalahan: [
        'Dua balok $m_1$ dan $m_2$ terhubung tali melalui katrol tanpa massa di atas sebuah kereta berbentuk bidang miring ganda yang licin.',
        'Bidang kiri miring naik ke kiri dengan sudut $\\alpha$ ($\\sin\\alpha = 5/13$) dan bidang kanan miring turun ke kanan dengan sudut $\\beta$.',
        'Kereta dipercepat ke kanan sebesar $A = 0{,}7g$, dan kedua massa diam relatif terhadap kereta (berarti keduanya ikut bergerak bersama kereta dengan percepatan $A = 0{,}7g$ ke kanan).',
        'Diketahui $m_1 / m_2 = 1{,}3$, dan kita diminta menghitung nilai $10\\sin\\beta - 7\\cos\\beta$.',
      ],
      pengetahuanAwal: [
        'Hukum II Newton pada kerangka inersial menyatakan $\\Sigma\\vec{F} = m\\vec{a}$. Sebagai alternatif setara, dalam kerangka acuan kereta yang dipercepat dengan $\\vec{A}$ ke kanan, benda bermassa $m$ mengalami gaya semu (gaya fiktif) sebesar $m A$ ke arah kiri.',
        'Untuk segitiga siku-siku dengan $\\sin\\alpha = 5/13$, berdasarkan teorema Pythagoras diperoleh $\\cos\\alpha = \\sqrt{1 - (5/13)^2} = 12/13$.',
        'Karena tali dan katrol ideal (tak bermassa dan licin), besar tegangan tali $T$ sama di sepanjang tali.',
      ],
      visualisasiFbd: [
        'Pada $m_1$ (dalam kerangka kereta): gaya berat $m_1 g$ ke bawah, gaya normal $N_1$ tegak lurus bidang kiri, gaya tegangan tali $T$ sejajar bidang miring mengarah ke katrol (kanan-bawah), dan gaya fiktif $m_1 A$ mendatar ke kiri.',
        'Pada $m_2$ (dalam kerangka kereta): gaya berat $m_2 g$ ke bawah, gaya normal $N_2$ tegak lurus bidang kanan, gaya tegangan tali $T$ sejajar bidang kanan mengarah ke katrol (kiri-atas), dan gaya fiktif $m_2 A$ mendatar ke kiri.',
      ],
      prinsipHukum: [
        'Hukum II Newton untuk sistem dipercepat (Dinamika Partikel pada Bidang Miring dan Kerangka Non-Inersial).',
      ],
      rumusUtama: [
        {
          label: 'Kesetimbangan Relatif pada Bidang Kiri',
          latex: 'T + m_1 g\\sin\\alpha - m_1 A\\cos\\alpha = 0',
          explanation:
            'Menjumlahkan komponen gaya sejajar bidang kiri ke arah katrol (kanan-bawah) sama dengan nol dalam kerangka kereta.',
          symbols: [
            '$T$: tegangan tali ($\\text{N}$)',
            '$A = 0{,}7g$: percepatan kereta ke kanan ($\\text{m/s}^2$)',
            '$\\alpha$: sudut kemiringan bidang kiri',
          ],
          validity: 'Berlaku selama tali menegang ($T > 0$) dan balok menempel pada bidang ($N_1 > 0$).',
        },
        {
          label: 'Kesetimbangan Relatif pada Bidang Kanan',
          latex: 'm_2 g\\sin\\beta - m_2 A\\cos\\beta - T = 0',
          explanation:
            'Menjumlahkan komponen gaya sejajar bidang kanan menjauhi katrol (kanan-bawah) sama dengan nol.',
          symbols: ['$\\beta$: sudut kemiringan bidang kanan'],
          validity: 'Berlaku selama $T > 0$ dan $N_2 > 0$.',
        },
      ],
      penurunanPersamaan: [
        'Dari persamaan untuk $m_1$: $$T = m_1 (A\\cos\\alpha - g\\sin\\alpha)$$',
        'Dari persamaan untuk $m_2$: $$T = m_2 (g\\sin\\beta - A\\cos\\beta)$$',
        'Samakan kedua nilai $T$ dan substitusi $A = 0{,}7g$: $$m_2 g (\\sin\\beta - 0{,}7\\cos\\beta) = m_1 g (0{,}7\\cos\\alpha - \\sin\\alpha)$$',
        'Bagi kedua ruas dengan $m_2 g$ dan kalikan $10$: $$10\\sin\\beta - 7\\cos\\beta = 10\\left(\\frac{m_1}{m_2}\\right)(0{,}7\\cos\\alpha - \\sin\\alpha)$$',
      ],
      langkahPenyelesaian: [
        'Diketahui: $\\sin\\alpha = \\frac{5}{13} \\implies \\cos\\alpha = \\frac{12}{13}$, $A = 0{,}7g$, dan $\\frac{m_1}{m_2} = 1{,}3$.',
        'Hitung suku di ruas kanan: $0{,}7\\cos\\alpha - \\sin\\alpha = 0{,}7\\left(\\frac{12}{13}\\right) - \\frac{5}{13} = \\frac{8{,}4 - 5}{13} = \\frac{3{,}4}{13}$.',
        'Kalikan dengan $10\\left(\\frac{m_1}{m_2}\\right) = 10 \\times 1{,}3 = 13$: $$10\\sin\\beta - 7\\cos\\beta = 13 \\times \\frac{3{,}4}{13} = 3{,}4$$',
      ],
      jawabanAkhirCatatan: 'Nilai 10 sin(β) - 7 cos(β) adalah 3,4.',
      pemeriksaanFisika: [
        'Periksa apakah tali benar-benar menegang: $T = m_1 g (3{,}4/13) > 0$, sehingga tali tidak kendur.',
        'Periksa gaya normal $N_2 = m_2 g(\\cos\\beta - 0{,}7\\sin\\beta)$: nilai $\\sin\\beta - 0{,}7\\cos\\beta = 0{,}34$ memberikan $\\beta \\approx 53{,}4^\\circ$, di mana $\\cos\\beta - 0{,}7\\sin\\beta \\approx 0{,}596 - 0{,}562 > 0$. Artinya $m_2$ tetap menempel pada bidang kanan dan seluruh sistem fisis sepenuhnya valid!',
      ],
    },
    narration: {
      soal: 'Soal nomor 5, topik Hukum Newton. Pada sistem tanpa gesekan seperti pada gambar, nilai sinus alfa sama dengan 5 per 13. Ketika pada kereta diberikan percepatan ke kanan sebesar 0,7 g, ternyata m 1 maupun m 2 tidak bergerak relatif terhadap kereta. Jika perbandingan m 1 terhadap m 2 sama dengan 1,3, tentukan nilai 10 sinus beta dikurangi 7 kosinus beta.',
      stimulus:
        'Diagram menunjukkan kereta berbentuk segitiga miring ganda dengan katrol di puncaknya. Massa m 1 berada di lereng kiri yang melandai ke katrol dengan sudut alfa, dan massa m 2 di lereng kanan bersudut beta.',
      fbd: 'Dalam kerangka kereta yang dipercepat ke kanan sebesar 0,7 g, setiap benda seolah merasakan gaya fiktif ke kiri sebesar massa dikali percepatan kereta. Pada m 1, gaya fiktif mendorong ke atas lereng kiri, sementara berat mendorong turun ke arah katrol, dan tali menarik ke katrol. Pada m 2, berat menarik turun lereng kanan, sementara tali dan gaya fiktif menahan ke kiri.',
      pengetahuanAwal:
        'Dengan bantuan segitiga Pythagoras 5, 12, 13, karena sinus alfa sama dengan 5 per 13, maka kosinus alfa pasti 12 per 13. Agar kedua benda diam relatif terhadap kereta, jumlah gaya sejajar bidang miring pada masing-masing massa dalam kerangka kereta harus sama dengan nol.',
      prinsip:
        'Kita menerapkan Hukum kedua Newton dalam kerangka non-inersial kereta yang dipercepat, serta kesamaan tegangan tali ideal.',
      rumus:
        'Pada benda pertama, tegangan tali T sama dengan m 1 dikalikan kurung buka A kosinus alfa dikurangi g sinus alfa kurung tutup. Pada benda kedua, T sama dengan m 2 dikalikan kurung buka g sinus beta dikurangi A kosinus beta kurung tutup.',
      langkah:
        'Samakan kedua persamaan tegangan tali dan ganti A dengan 0,7 g. Kita peroleh sinus beta dikurangi 0,7 kosinus beta sama dengan rasio m 1 per m 2 dikalikan 0,7 kosinus alfa dikurangi sinus alfa. Masukkan nilai: 0,7 dikali 12 per 13 dikurangi 5 per 13 sama dengan 3,4 per 13. Lalu kalikan dengan m 1 per m 2 yaitu 1,3, menghasilkan 0,34. Karena soal menanyakan 10 sinus beta dikurangi 7 kosinus beta, kalikan 0,34 dengan 10 sehingga diperoleh tepat 3,4.',
      jawabanAkhir:
        'Jadi, jawaban akhirnya adalah 3,4. Semua gaya normal dan tegangan tali bernilai positif, membuktikan kondisi fisisnya valid.',
    },
  },
  {
    id: 6,
    topic: 'Hukum Newton',
    title: 'Waktu Luncur Tersingkat pada Bidang Miring Kasar',
    questionText:
      'Sebuah benda kecil $A$ mulai meluncur ke bawah dari puncak sebuah bidang miring yang panjang alasnya $\\ell = 3{,}6\\text{ m}$. Koefisien gesekan kinetik antara benda dan permukaan bidang miring adalah $\\mu = 0{,}45$. Agar benda $A$ dapat meluncur dengan waktu paling singkat, maka nilai sudut $\\alpha$ nya adalah ... derajat.',
    promptEnding: 'Nilai sudut α untuk waktu tersingkat (dalam derajat):',
    unit: 'derajat',
    answerValue: 57.1,
    answerFormatted: '57,1',
    tolerance: 0.1,
    hasStimulusDiagram: true,
    stimulusCaption:
      'Benda A meluncur menuruni bidang miring kasar (koefisien gesek μ = 0,45) dengan panjang alas mendatar tetap ℓ = 3,6 m dan sudut kemiringan α.',
    fbdCaption:
      'Diagram benda bebas benda A pada bidang miring sudut α: gaya berat mg diuraikan menjadi mg sin α dan mg cos α, gaya normal N, dan gaya gesekan kinetik f_k = μN berlawanan arah gerak.',
    explanation: {
      memahamiPermasalahan: [
        'Benda kecil $A$ dilepas dari keadaan diam ($v_0 = 0$) di puncak bidang miring kasar dengan koefisien gesek kinetik $\\mu = 0{,}45$.',
        'Panjang alas horizontal bidang miring dijaga tetap sebesar $\\ell = 3{,}6\\text{ m}$, sedangkan sudut kemiringannya $\\alpha$ dapat diubah-ubah.',
        'Jika $\\alpha$ terlalu kecil, percepatan benda kecil (bahkan bisa berhenti karena gesekan). Jika $\\alpha$ terlalu besar (mendekati $90^\\circ$), lintasan miring $L = \\ell / \\cos\\alpha$ menjadi sangat panjang.',
        'Kita mencari sudut optimum $\\alpha$ agar waktu tempuh $t$ dari puncak ke dasar minimum.',
      ],
      pengetahuanAwal: [
        'Panjang sisi miring segitiga siku-siku dengan alas $\\ell$ dan sudut alas $\\alpha$ adalah $L = \\frac{\\ell}{\\cos\\alpha}$.',
        'Untuk gerak lurus berubah beraturan dari keadaan diam menempuh jarak $L$ dengan percepatan konstan $a$, waktu tempuhnya memenuhi $L = \\frac{1}{2}at^2 \\implies t = \\sqrt{\\frac{2L}{a}}$.',
        'Gaya gesekan kinetik besarnya $f_k = \\mu N$, dengan $N$ adalah gaya normal dari bidang miring.',
      ],
      visualisasiFbd: [
        'Pilih sumbu-$x$ sejajar bidang miring ke bawah dan sumbu-$y$ tegak lurus bidang miring ke atas.',
        'Gaya-gaya pada $A$: berat $mg$ vertikal ke bawah (komponen $mg\\sin\\alpha$ sejajar bidang ke bawah dan $mg\\cos\\alpha$ tegak lurus ke dalam bidang), gaya normal $N$ sepanjang $+y$, dan gaya gesek kinetik $f_k = \\mu N$ sepanjang $-x$ (ke atas bidang).',
      ],
      prinsipHukum: [
        'Hukum II Newton pada bidang miring kasar, Kinematika GLBB, dan Optimasi Kalkulus (mencari titik stasioner turunan pertama).',
      ],
      rumusUtama: [
        {
          label: 'Percepatan Benda pada Bidang Miring Kasar',
          latex: 'a = g(\\sin\\alpha - \\mu\\cos\\alpha)',
          explanation:
            'Dari $\\Sigma F_y = N - mg\\cos\\alpha = 0$ dan $\\Sigma F_x = mg\\sin\\alpha - \\mu N = ma$.',
          symbols: [
            '$a$: percepatan menuruni bidang ($\\text{m/s}^2$)',
            '$\\mu$: koefisien gesekan kinetik',
            '$\\alpha$: sudut kemiringan bidang',
          ],
          validity: 'Berlaku selama benda meluncur turun, yakni $\\tan\\alpha > \\mu$.',
        },
        {
          label: 'Sudut Optimum untuk Waktu Tersingkat',
          latex: '\\tan(2\\alpha) = -\\frac{1}{\\mu} \\iff \\alpha = 45^\\circ + \\frac{1}{2}\\arctan(\\mu)',
          explanation:
            'Diperoleh dengan memaksimumkan penyebut di dalam akar fungsi waktu tempuh $t(\\alpha)$.',
          symbols: ['$\\alpha$: sudut optimum ($45^\\circ < \\alpha < 90^\\circ$)'],
          validity: 'Berlaku untuk panjang alas $\\ell$ tetap.',
        },
      ],
      penurunanPersamaan: [
        'Substitusikan $L = \\frac{\\ell}{\\cos\\alpha}$ dan $a = g(\\sin\\alpha - \\mu\\cos\\alpha)$ ke dalam rumus waktu tempuh: $$t(\\alpha) = \\sqrt{\\frac{2\\ell}{g\\cos\\alpha(\\sin\\alpha - \\mu\\cos\\alpha)}}$$',
        'Meminimumkan $t(\\alpha)$ setara dengan memaksimumkan fungsi $h(\\alpha) = \\cos\\alpha\\sin\\alpha - \\mu\\cos^2\\alpha$.',
        'Gunakan identitas trigonometri $\\sin(2\\alpha) = 2\\sin\\alpha\\cos\\alpha$ dan $\\cos^2\\alpha = \\frac{1 + \\cos(2\\alpha)}{2}$: $$h(\\alpha) = \\frac{1}{2}\\sin(2\\alpha) - \\frac{\\mu}{2}(1 + \\cos(2\\alpha))$$',
        'Turunkan terhadap $\\alpha$ dan samakan dengan nol: $$h\'(\\alpha) = \\cos(2\\alpha) + \\mu\\sin(2\\alpha) = 0 \\implies \\tan(2\\alpha) = -\\frac{1}{\\mu}$$',
        'Karena $0^\\circ < \\alpha < 90^\\circ$ dan $\\tan(2\\alpha) < 0$, maka $2\\alpha$ berada di kuadran II: $2\\alpha = 90^\\circ + \\arctan(\\mu) \\implies \\alpha = 45^\\circ + \\frac{1}{2}\\arctan(\\mu)$.',
      ],
      langkahPenyelesaian: [
        'Diketahui: $\\ell = 3{,}6\\text{ m}$ (saling meniadakan dalam penentuan sudut optimum) dan $\\mu = 0{,}45$.',
        'Ditanyakan: sudut optimum $\\alpha$ dalam derajat.',
        'Hitung $\\arctan(0{,}45) \\approx 24{,}2277^\\circ$.',
        'Hitung $\\alpha = 45^\\circ + \\frac{1}{2}(24{,}2277^\\circ) = 45^\\circ + 12{,}1139^\\circ = 57{,}1139^\\circ$.',
        'Dibulatkan satu angka di belakang koma menjadi $57{,}1^\\circ$.',
      ],
      jawabanAkhirCatatan: 'Sudut kemiringan bidang agar waktu meluncur paling singkat adalah 57,1 derajat.',
      pemeriksaanFisika: [
        'Periksa syarat meluncur: $\\tan(57{,}1^\\circ) \\approx 1{,}546 > \\mu = 0{,}45$, sehingga benda pasti meluncur.',
        'Periksa kasus batas licin ($\\mu = 0$): rumus memberikan $\\alpha = 45^\\circ$, yang merupakan hasil klasik terkenal untuk bidang miring licin dengan alas tetap!',
      ],
    },
    narration: {
      soal: 'Soal nomor 6, topik Hukum Newton. Sebuah benda kecil A mulai meluncur ke bawah dari puncak sebuah bidang miring yang panjang alasnya L sama dengan 3,6 meter. Koefisien gesekan kinetik antara benda dan permukaan bidang miring adalah mu sama dengan 0,45. Agar benda A dapat meluncur dengan waktu paling singkat, berapakah nilai sudut alfa dalam derajat.',
      stimulus:
        'Gambar menunjukkan sebuah bidang miring segitiga siku-siku dengan panjang alas mendatar 3,6 meter, sudut kemiringan alfa, koefisien gesek mu, dan balok kecil A di puncaknya.',
      fbd: 'Pada balok A bekerja tiga gaya: gaya berat m kali g ke bawah, gaya normal N tegak lurus permukaan ke atas, dan gaya gesekan kinetik mu kali N sejajar bidang miring mengarah ke atas, melawan arah luncuran.',
      pengetahuanAwal:
        'Panjang lintasan miring adalah alas dibagi kosinus alfa. Sementara percepatan benda yang meluncur turun dengan gesekan memenuhi Hukum kedua Newton, yaitu g dikalikan sinus alfa dikurangi mu kosinus alfa.',
      prinsip:
        'Kita menggabungkan Hukum kedua Newton, kinematika gerak dipercepat dari keadaan diam, dan teknik kalkulus untuk mencari titik maksimum atau minimum.',
      rumus:
        'Waktu luncur t sama dengan akar dari 2 L dibagi g kosinus alfa dikalikan sinus alfa dikurangi mu kosinus alfa. Melalui turunan pertama fungsi penyebutnya, sudut optimum memenuhi rumus alfa sama dengan 45 derajat ditambah setengah dari arkus tangen mu.',
      langkah:
        'Perhatikan bahwa panjang alas 3,6 meter tidak memengaruhi besar sudut optimum karena faktor L merupakan konstanta pengali. Kita cukup menghitung arkus tangen dari 0,45, yang bernilai 24,23 derajat. Setengahnya adalah 12,11 derajat. Tambahkan ke 45 derajat, sehingga diperoleh 57,11 derajat. Dibulatkan satu angka di belakang koma menjadi 57,1 derajat.',
      jawabanAkhir:
        'Jadi, sudut kemiringan paling optimal adalah 57,1 derajat. Jika bidang licin dengan mu sama dengan nol, sudut optimalnya kembali ke nilai klasik 45 derajat.',
    },
  },
  {
    id: 7,
    topic: 'Hukum Newton',
    title: 'Mobil di Belokan Melingkar Miring',
    questionText:
      'Sebuah mobil sedan bermassa $1{,}2\\text{ ton}$ sedang berada di suatu belokan melingkar yang miring (jalan dianggap licin tanpa gaya gesek samping) dengan kondisi seperti pada gambar. Diketahui nilai $\\theta = 25^\\circ$, jari-jari lingkaran belokan ke pusat massa mobil adalah $r = 60\\text{ m}$, dan percepatan gravitasi $g = 9{,}8\\text{ m/s}^2$. Kecepatan mobil agar mobil melaju stabil tanpa terbalik atau tergelincir saat melewati belokan tersebut adalah ... $\\text{m/s}$.',
    promptEnding: 'Kecepatan mobil (dalam m/s):',
    unit: 'm/s',
    answerValue: 16.6,
    answerFormatted: '16,6',
    tolerance: 0.1,
    hasStimulusDiagram: true,
    stimulusCaption:
      'Mobil sedan di tikungan melingkar yang dimiringkan sebesar θ = 25° dengan jari-jari lintasan r = 60 m menuju pusat lingkaran di sebelah kanan.',
    fbdCaption:
      'Diagram benda bebas mobil pada tikungan miring tanpa gesekan: gaya berat W = mg ke bawah dan gaya normal N tegak lurus permukaan miring.',
    explanation: {
      memahamiPermasalahan: [
        'Sebuah mobil bermassa $m = 1{,}2\\text{ ton} = 1200\\text{ kg}$ menempuh tikungan melingkar mendatar berjari-jari $r = 60\\text{ m}$.',
        'Permukaan jalan dimiringkan sebesar $\\theta = 25^\\circ$ ke arah dalam tikungan (sisi kanan pada gambar lebih rendah, sehingga komponen horizontal gaya normal mengarah ke kanan menuju pusat lingkaran).',
        'Pada kondisi jalan licin tanpa gaya gesek samping, hanya ada kecepatan tertentu yang menjaga keseimbangan gaya vertikal dan menghasilkan gaya sentripetal tepat agar mobil tidak tergelincir atau terguling.',
      ],
      pengetahuanAwal: [
        'Benda yang bergerak melingkar beraturan dengan laju $v$ dan jari-jari $r$ membutuhkan gaya sentripetal sebesar $F_s = \\frac{mv^2}{r}$ menuju pusat lintasan melingkar (arah horizontal, BUKAN sejajar bidang miring).',
        'Pada sumbu vertikal ($y$), mobil tidak mengalami percepatan ($a_y = 0$), sehingga total gaya vertikal harus nol.',
      ],
      visualisasiFbd: [
        'Gambarkan sumbu koordinat horizontal $x$ (mengarah ke pusat kelengkungan di kanan) dan vertikal $y$ (mengarah ke atas).',
        'Gaya berat $W = mg$ lurus ke bawah ($-y$). Gaya normal $N$ tegak lurus permukaan jalan miring, membentuk sudut $\\theta$ terhadap vertikal, sehingga komponennya adalah $N_y = N\\cos\\theta$ ke atas dan $N_x = N\\sin\\theta$ ke kanan (menuju pusat lingkaran).',
      ],
      prinsipHukum: [
        'Hukum II Newton pada Gerak Melingkar Beraturan (Dinamika Tikungan Miring / Banked Curve).',
      ],
      rumusUtama: [
        {
          label: 'Kesetimbangan Arah Vertikal',
          latex: 'N\\cos\\theta = mg',
          explanation: 'Komponen vertikal gaya normal mengimbangi seluruh berat mobil.',
          symbols: [
            '$N$: gaya normal dari jalan ($\\text{N}$)',
            '$\\theta$: sudut kemiringan jalan',
          ],
          validity: 'Berlaku selama mobil berada pada ketinggian tetap di tikungan datar-miring.',
        },
        {
          label: 'Dinamika Sentripetal Arah Horizontal',
          latex: 'N\\sin\\theta = \\frac{mv^2}{r} \\implies v = \\sqrt{gr\\tan\\theta}',
          explanation:
            'Komponen horizontal gaya normal menyediakan gaya sentripetal murni tanpa memerlukan gaya gesek samping.',
          symbols: [
            '$v$: laju aman ideal mobil ($\\text{m/s}$)',
            '$r$: jari-jari belokan ($\\text{m}$)',
            '$g$: percepatan gravitasi ($\\text{m/s}^2$)',
          ],
          validity: 'Berlaku untuk kecepatan ideal tikungan miring licin (tidak bergantung pada massa mobil).',
        },
      ],
      penurunanPersamaan: [
        'Bagi persamaan horizontal $N\\sin\\theta = \\frac{mv^2}{r}$ dengan persamaan vertikal $N\\cos\\theta = mg$: $$\\frac{N\\sin\\theta}{N\\cos\\theta} = \\frac{mv^2 / r}{mg} \\implies \\tan\\theta = \\frac{v^2}{gr}$$',
        'Dengan demikian $v = \\sqrt{g r \\tan\\theta}$. Perhatikan bahwa massa $m = 1{,}2\\text{ ton}$ saling meniadakan.',
      ],
      langkahPenyelesaian: [
        'Diketahui: $\\theta = 25^\\circ$, $r = 60\\text{ m}$, $g = 9{,}8\\text{ m/s}^2$.',
        'Hitung nilai $\\tan(25^\\circ) \\approx 0{,}466308$.',
        'Hitung $v^2 = 9{,}8 \\times 60 \\times 0{,}466308 = 588 \\times 0{,}466308 = 274{,}189\\text{ m}^2/\\text{s}^2$.',
        'Ambil akar kuadrat: $v = \\sqrt{274{,}189} = 16{,}5586...\\text{ m/s}$.',
        'Dibulatkan satu angka di belakang koma menjadi $16{,}6\\text{ m/s}$.',
      ],
      jawabanAkhirCatatan: 'Kecepatan ideal mobil saat melewati tikungan miring tersebut adalah 16,6 m/s.',
      pemeriksaanFisika: [
        'Konversi ke satuan jalan raya: $16{,}6\\text{ m/s} \\approx 59{,}8\\text{ km/jam}$, sangat realistis untuk kecepatan mobil sedan saat menikung di jalan miring berjari-jari $60\\text{ m}$.',
        'Dimensi hasil: $\\sqrt{(\\text{m/s}^2) \\cdot \\text{m}} = \\text{m/s}$, tepat.',
      ],
    },
    narration: {
      soal: 'Soal nomor 7, topik Hukum Newton. Sebuah mobil sedan bermassa 1,2 ton sedang berada di suatu belokan melingkar yang miring tanpa gaya gesek samping dengan sudut theta sama dengan 25 derajat, jari-jari belokan r sama dengan 60 meter, dan percepatan gravitasi g sama dengan 9,8 meter per sekon kuadrat. Tentukan kecepatan mobil agar stabil melewati belokan tersebut.',
      stimulus:
        'Gambar memperlihatkan mobil berada pada jalan miring dengan sudut kemiringan 25 derajat terhadap horizontal, serta arah sumbu x horizontal menuju pusat lingkaran belokan.',
      fbd: 'Pada mobil bekerja gaya berat W sama dengan m g lurus ke bawah, serta gaya normal N yang tegak lurus bidang miring. Jika N diuraikan ke sumbu x dan y, komponen N kosinus theta mengarah ke atas dan N sinus theta mengarah horizontal menuju pusat lingkaran.',
      pengetahuanAwal:
        'Agar mobil berbelok melingkar tanpa bergeser naik atau turun pada bidang miring licin, percepatan vertikalnya harus nol, sedangkan komponen gaya horizontalnya harus menyediakan tepat gaya sentripetal sebesar m v kuadrat dibagi r.',
      prinsip:
        'Kita menggunakan Hukum kedua Newton dalam gerak melingkar beraturan pada bidang miring.',
      rumus:
        'N kosinus theta sama dengan m g, dan N sinus theta sama dengan m v kuadrat dibagi r. Dengan membagi kedua persamaan, massa dan gaya normal hilang sehingga v sama dengan akar dari g dikali r dikali tangen theta.',
      langkah:
        'Substitusikan g sama dengan 9,8, r sama dengan 60 meter, dan tangen 25 derajat sekitar 0,4663. Kalikan ketiganya: 9,8 dikali 60 sama dengan 588, lalu dikali 0,4663 menghasilkan 274,19. Akar kuadrat dari 274,19 adalah 16,56 meter per sekon. Dibulatkan satu angka di belakang koma menjadi 16,6 meter per sekon.',
      jawabanAkhir:
        'Jadi, kecepatan mobil tersebut adalah 16,6 meter per sekon, atau sekitar 60 kilometer per jam.',
    },
  },
  {
    id: 8,
    topic: 'Hukum Newton',
    title: 'Percepatan pada Sistem Katrol Ganda',
    questionText:
      'Pada gambar sistem katrol berikut ini diketahui $m_1 = 2\\text{ kg}$, $m_2 = 6\\text{ kg}$, dan $m_3 = 12\\text{ kg}$. Asumsi kedua katrol licin tak bermassa, seluruh tali tak bermassa dan tak dapat mulur. Percepatan gravitasi sama dengan $g$. Jika $a_1$ adalah percepatan $m_1$ relatif terhadap katrol atas, maka $a_1 / g$ sama dengan ...',
    promptEnding: 'Nilai perbandingan tak berdimensi a₁ / g:',
    unit: '',
    answerValue: 0.8,
    answerFormatted: '0,8',
    tolerance: 0.05,
    hasStimulusDiagram: true,
    stimulusCaption:
      'Sistem dua katrol tak bermassa: m₁ digantung di sisi kiri katrol atas yang tetap, dan sebuah katrol bergerak di sisi kanan menahan m₂ dan m₃.',
    fbdCaption:
      'Diagram benda bebas untuk m₁, katrol bergerak tak bermassa (T₁ = 2T₂), massa m₂, dan massa m₃ beserta arah percepatan masing-masing.',
    explanation: {
      memahamiPermasalahan: [
        'Sebuah katrol atas terpasang tetap pada atap. Tali pertama melewati katrol ini menghubungkan beban $m_1 = 2\\text{ kg}$ di kiri dengan poros katrol kedua (katrol bergerak) di kanan.',
        'Pada katrol bergerak tergantung tali kedua yang menghubungkan $m_2 = 6\\text{ kg}$ dan $m_3 = 12\\text{ kg}$.',
        'Semua katrol dan tali dianggap ideal (tak bermassa, licin, dan panjang tali tetap).',
        'Kita mencari besar percepatan $m_1$ relatif terhadap katrol atas (yang diam), dinyatakan dalam rasio $a_1 / g$.',
      ],
      pengetahuanAwal: [
        'Karena katrol atas diam (tetap), percepatan $m_1$ relatif terhadap katrol atas sama dengan percepatan $m_1$ di kerangka laboratorium.',
        'Jika tali pertama tidak mulur, perpindahan naik $m_1$ selalu sama dengan perpindahan turun katrol bergerak. Jadi jika $m_1$ naik dengan percepatan $a_1$, katrol bergerak turun dengan percepatan $a_1$.',
        'Untuk katrol tak bermassa ($m_{\\text{katrol}} = 0$), resultan gaya padanya harus nol meskipun ia bergerak dipercepat: $T_1 - 2T_2 = 0 \\implies T_1 = 2T_2$.',
      ],
      visualisasiFbd: [
        'Benda $m_1$: ditarik $T_1$ ke atas dan $m_1 g$ ke bawah, dipercepat ke atas sebesar $a_1$.',
        'Katrol bergerak: ditarik $T_1$ ke atas dan dua segmen tali $T_2$ ke bawah, sehingga $T_1 = 2T_2$.',
        'Benda $m_2$ dan $m_3$: masing-masing ditarik $T_2$ ke atas dan beratnya ke bawah. Jika percepatan relatif keduanya terhadap katrol bergerak adalah $a_r$ ($m_2$ naik relatif, $m_3$ turun relatif), maka percepatan ke bawah dalam kerangka lab adalah $a_2 = a_1 - a_r$ dan $a_3 = a_1 + a_r$.',
      ],
      prinsipHukum: [
        'Hukum II Newton pada Sistem Katrol Majemuk dan Kendala Panjang Tali (Constraint Equation).',
      ],
      rumusUtama: [
        {
          label: 'Hubungan Tegangan Tali Katrol Bergerak',
          latex: 'T_1 = 2T_2',
          explanation: 'Diperoleh dari $\\Sigma F = m_{\\text{katrol}} a = 0$ pada katrol bawah.',
          symbols: [
            '$T_1$: tegangan tali atas ($\\text{N}$)',
            '$T_2$: tegangan tali bawah ($\\text{N}$)',
          ],
          validity: 'Berlaku untuk katrol licin yang massanya dapat diabaikan.',
        },
        {
          label: 'Massa Efektif Katrol Bawah & Percepatan a₁',
          latex: 'M_{\\text{ef}} = \\frac{4 m_2 m_3}{m_2 + m_3}, \\qquad \\frac{a_1}{g} = \\frac{M_{\\text{ef}} - m_1}{M_{\\text{ef}} + m_1}',
          explanation:
            'Katrol bergerak beserta $m_2$ dan $m_3$ bertingkah seperti satu beban efektif $M_{\\text{ef}}$ dalam gaya tarik tali $T_1 = M_{\\text{ef}}(g - a_1)$.',
          symbols: ['$M_{\\text{ef}}$: massa efektif sistem katrol bawah ($\\text{kg}$)'],
          validity: 'Berlaku jika $m_2$ dan $m_3$ bergerak bebas di bawah katrol bergerak.',
        },
      ],
      penurunanPersamaan: [
        'Tuliskan Hukum II Newton pada kerangka lab (arah positif $m_1$ ke atas, arah positif $m_2, m_3$ ke bawah): $$T_1 - m_1 g = m_1 a_1$$ $$m_2 g - T_2 = m_2 (a_1 - a_r) \\implies g - \\frac{T_2}{m_2} = a_1 - a_r$$ $$m_3 g - T_2 = m_3 (a_1 + a_r) \\implies g - \\frac{T_2}{m_3} = a_1 + a_r$$',
        'Jumlahkan kedua persamaan terakhir agar $a_r$ hilang: $$2g - T_2\\left(\\frac{1}{m_2} + \\frac{1}{m_3}\\right) = 2a_1 \\implies T_2 = \\frac{2 m_2 m_3}{m_2 + m_3}(g - a_1)$$',
        'Karena $T_1 = 2T_2$, maka $T_1 = \\frac{4 m_2 m_3}{m_2 + m_3}(g - a_1) = M_{\\text{ef}}(g - a_1)$.',
        'Substitusikan ke persamaan $m_1$: $M_{\\text{ef}}(g - a_1) - m_1 g = m_1 a_1 \\implies a_1 = \\frac{M_{\\text{ef}} - m_1}{M_{\\text{ef}} + m_1}g$.',
      ],
      langkahPenyelesaian: [
        'Diketahui: $m_1 = 2\\text{ kg}$, $m_2 = 6\\text{ kg}$, $m_3 = 12\\text{ kg}$.',
        'Hitung massa efektif katrol bawah: $M_{\\text{ef}} = \\frac{4(6)(12)}{6 + 12} = \\frac{288}{18} = 16\\text{ kg}$.',
        'Hitung rasio percepatan: $\\frac{a_1}{g} = \\frac{16 - 2}{16 + 2} = \\frac{14}{18} = \\frac{7}{9} = 0{,}7777...$',
        'Dibulatkan satu angka di belakang koma menjadi $0{,}8$.',
      ],
      jawabanAkhirCatatan: 'Perbandingan a₁ / g sama dengan 0,8.',
      pemeriksaanFisika: [
        'Cek batas ekstrem: jika $m_2 = m_3 = 6\\text{ kg}$, $M_{\\text{ef}} = 12\\text{ kg} = m_2 + m_3$, tepat seperti satu benda bermassa total $12\\text{ kg}$.',
        'Karena $m_2 \\ne m_3$, $M_{\\text{ef}} = 16\\text{ kg} < m_2 + m_3 = 18\\text{ kg}$, yang sesuai karena $m_3$ lebih bebas jatuh sehingga tarikan ke tali atas lebih ringan daripada $18\\text{ kg}$. Nilai $0 < a_1/g = 0{,}8 < 1$ sangat wajar.',
      ],
    },
    narration: {
      soal: 'Soal nomor 8, topik Hukum Newton. Pada gambar sistem katrol diketahui m 1 sama dengan 2 kilogram, m 2 sama dengan 6 kilogram, dan m 3 sama dengan 12 kilogram. Kedua katrol licin tak bermassa, dan tali tak dapat mulur. Jika a 1 adalah percepatan m 1 relatif terhadap katrol atas, tentukan nilai a 1 dibagi g.',
      stimulus:
        'Gambar menunjukkan satu katrol tetap di atas. Sisi kirinya menahan massa m 1, sedangkan sisi kanannya terhubung ke sebuah katrol kedua yang dapat bergerak naik turun membawa massa m 2 dan m 3.',
      fbd: 'Untuk diagram gaya: m 1 ditarik T 1 ke atas dan m 1 g ke bawah. Pada katrol bawah yang tak bermassa, T 1 ke atas diimbangi oleh dua kali T 2 ke bawah, sehingga T 1 sama dengan 2 T 2. Massa m 2 dan m 3 masing-masing mengalami tegangan tali T 2 ke atas dan gaya beratnya ke bawah.',
      pengetahuanAwal:
        'Karena katrol atas diam, percepatan m 1 ke atas sama besar dengan percepatan turun katrol bawah, sebut saja a 1. Jika kita menuliskan gerak relatif m 2 dan m 3 terhadap katrol bawah dengan percepatan relatif a r, percepatan total ke bawah keduanya adalah a 1 minus a r dan a 1 plus a r.',
      prinsip:
        'Kita menerapkan Hukum kedua Newton untuk masing-masing massa serta syarat tali tak mulur pada sistem katrol ganda.',
      rumus:
        'Massa efektif sistem katrol bawah M efektif sama dengan 4 dikali m 2 dikali m 3 dibagi jumlah m 2 dan m 3. Lalu perbandingan a 1 per g sama dengan M efektif dikurangi m 1 dibagi M efektif ditambah m 1.',
      langkah:
        'Mari kita hitung. Pertama, hitung massa efektif: 4 dikali 6 dikali 12 dibagi 6 tambah 12, yaitu 288 dibagi 18 sama dengan 16 kilogram. Kedua, masukkan m 1 sama dengan 2 kilogram ke rumus percepatan: 16 dikurangi 2 dibagi 16 ditambah 2, menghasilkan 14 per 18 atau 7 per 9, yang bernilai 0,7778. Dibulatkan satu angka di belakang koma menjadi 0,8.',
      jawabanAkhir:
        'Jadi, nilai perbandingan a 1 terhadap g adalah 0,8. Nilai ini berada di antara nol dan satu serta lebih kecil dibandingkan apabila kedua massa bawah dikunci menjadi 18 kilogram.',
    },
  },
  {
    id: 9,
    topic: 'Hukum Newton',
    title: 'Percepatan Troli Belanja Menaiki Bidang Miring Kasar',
    questionText:
      'Sebuah troli belanja bermassa $12\\text{ kg}$ didorong untuk menaiki bidang miring (dengan sudut kemiringan $\\theta = 30^\\circ$) oleh gaya konstan $F = 110\\text{ N}$ yang sejajar dengan bidang miring. Jika ban troli dianggap selalu slip dan koefisien gesekan kinetik antara ban troli dan permukaan bidang miring adalah $\\mu_k = 0{,}25$, maka percepatan troli tersebut adalah ... $\\text{m/s}^2$ (gunakan $g = 9{,}8\\text{ m/s}^2$).',
    promptEnding: 'Percepatan troli menaiki bidang miring (dalam m/s²):',
    unit: 'm/s²',
    answerValue: 2.1,
    answerFormatted: '2,1',
    tolerance: 0.1,
    hasStimulusDiagram: true,
    stimulusCaption:
      'Troli bermassa 12 kg didorong menaiki bidang miring dengan sudut θ = 30° oleh gaya dorong F = 110 N sejajar bidang miring.',
    fbdCaption:
      'Diagram benda bebas troli: gaya dorong F ke atas bidang, komponen berat mg sin θ dan gaya gesek kinetik f_k ke bawah bidang, serta gaya normal N diimbangi mg cos θ.',
    explanation: {
      memahamiPermasalahan: [
        'Troli bermassa $m = 12\\text{ kg}$ didorong ke atas sepanjang bidang miring yang membentuk sudut $\\theta = 30^\\circ$ terhadap horizontal.',
        'Gaya dorong $F = 110\\text{ N}$ bekerja sejajar bidang miring mengarah ke atas.',
        'Karena ban dianggap selalu slip (tergelincir murni tanpa menggelinding), gaya hambatnya berupa gesekan kinetik $f_k = \\mu_k N$ dengan $\\mu_k = 0{,}25$, berarah ke bawah sejajar bidang miring.',
        'Kita mencari besar percepatan troli $a$ ke atas bidang miring.',
      ],
      pengetahuanAwal: [
        'Dalam arah tegak lurus bidang miring, troli tidak melayang atau menembus permukaan, sehingga $\\Sigma F_\\perp = 0$ dan $N = mg\\cos\\theta$.',
        'Gaya gesekan kinetik selalu berlawanan dengan arah gerak relatif permukaan, yaitu ke bawah bidang miring.',
      ],
      visualisasiFbd: [
        'Gambarkan sumbu-$x$ sejajar bidang miring mengarah ke atas (arah gerak) dan sumbu-$y$ tegak lurus bidang ke atas.',
        'Gaya pada sumbu-$x$: $+F$ (ke atas), $-mg\\sin\\theta$ (ke bawah), dan $-f_k$ (ke bawah). Gaya pada sumbu-$y$: $+N$ dan $-mg\\cos\\theta$.',
      ],
      prinsipHukum: [
        'Hukum I dan II Newton untuk Gerak Translasi pada Bidang Miring Kasar.',
      ],
      rumusUtama: [
        {
          label: 'Gaya Normal dan Gesekan Kinetik',
          latex: 'N = mg\\cos\\theta, \\qquad f_k = \\mu_k N = \\mu_k mg\\cos\\theta',
          explanation: 'Gaya gesek sebanding dengan gaya normal tekan antara troli dan lantai miring.',
          symbols: [
            '$N$: gaya normal ($\\text{N}$)',
            '$f_k$: gaya gesek kinetik ($\\text{N}$)',
            '$\\mu_k$: koefisien gesek kinetik',
          ],
          validity: 'Berlaku selama troli bergerak slip di sepanjang bidang datar-miring.',
        },
        {
          label: 'Percepatan Menaiki Bidang Miring',
          latex: 'a = \\frac{F - mg\\sin\\theta - \\mu_k mg\\cos\\theta}{m}',
          explanation: 'Diperoleh langsung dari $\\Sigma F_x = ma$.',
          symbols: ['$a$: percepatan troli sejajar bidang miring ($\\text{m/s}^2$)'],
          validity: 'Berlaku bila $F > mg\\sin\\theta + \\mu_k mg\\cos\\theta$ sehingga troli bergerak naik.',
        },
      ],
      penurunanPersamaan: [
        'Dari Hukum II Newton sejajar bidang miring: $$F - mg\\sin\\theta - f_k = ma$$',
        'Substitusikan $f_k = \\mu_k mg\\cos\\theta$, lalu bagi kedua ruas dengan massa $m$: $$a = \\frac{F}{m} - g(\\sin\\theta + \\mu_k\\cos\\theta)$$',
      ],
      langkahPenyelesaian: [
        'Diketahui: $m = 12\\text{ kg}$, $\\theta = 30^\\circ$, $F = 110\\text{ N}$, $\\mu_k = 0{,}25$, $g = 9{,}8\\text{ m/s}^2$.',
        'Hitung komponen berat sejajar bidang: $mg\\sin 30^\\circ = 12 \\times 9{,}8 \\times 0{,}5 = 58{,}8\\text{ N}$.',
        'Hitung gaya gesekan kinetik: $f_k = 0{,}25 \\times 12 \\times 9{,}8 \\times \\cos 30^\\circ = 29{,}4 \\times 0{,}866025 = 25{,}4611\\text{ N}$.',
        'Hitung gaya netto ke atas bidang: $F_{\\text{net}} = 110 - 58{,}8 - 25{,}4611 = 25{,}7389\\text{ N}$.',
        'Hitung percepatan: $a = \\frac{25{,}7389}{12} = 2{,}1449...\\text{ m/s}^2$.',
        'Dibulatkan satu angka di belakang koma menjadi $2{,}1\\text{ m/s}^2$.',
      ],
      jawabanAkhirCatatan: 'Percepatan troli menaiki bidang miring adalah 2,1 m/s².',
      pemeriksaanFisika: [
        'Gaya dorong $110\\text{ N}$ lebih besar dari total gaya penahan $58{,}8 + 25{,}5 = 84{,}3\\text{ N}$, sehingga percepatan bernilai positif dan troli memang bergerak naik.',
        'Satuan $\\text{N}/\\text{kg} = \\text{m/s}^2$, sesuai dimensi percepatan.',
      ],
    },
    narration: {
      soal: 'Soal nomor 9, topik Hukum Newton. Sebuah troli belanja bermassa 12 kilogram didorong menaiki bidang miring dengan sudut kemiringan 30 derajat oleh gaya konstan F sama dengan 110 Newton yang sejajar bidang miring. Jika ban troli selalu slip dengan koefisien gesekan kinetik 0,25 dan percepatan gravitasi 9,8 meter per sekon kuadrat, tentukan percepatan troli tersebut.',
      stimulus:
        'Ilustrasi menunjukkan sebuah troli pada bidang miring bersudut 30 derajat dengan gaya dorong F sejajar ke atas bidang.',
      fbd: 'Pada troli bekerja gaya dorong F mengarah ke atas bidang miring, gaya normal N tegak lurus ke atas permukaan, serta dua gaya yang menghambat gerak naik yaitu komponen berat m g sinus 30 derajat ke bawah bidang dan gaya gesekan kinetik f k yang juga ke bawah bidang.',
      pengetahuanAwal:
        'Gaya normal sama dengan komponen berat yang tegak lurus bidang miring, yaitu m g kosinus theta. Gaya gesekan kinetik besarnya koefisien gesek dikalikan gaya normal, dan arahnya selalu melawan arah gerak troli.',
      prinsip:
        'Kita menerapkan Hukum kedua Newton dalam arah tegak lurus dan sejajar bidang miring.',
      rumus:
        'Percepatan a sama dengan F dikurangi m g sinus theta dikurangi mu k kali m g kosinus theta, lalu seluruhnya dibagi massa m.',
      langkah:
        'Mari kita hitung nilainya. Pertama, komponen berat m g sinus 30 derajat adalah 12 dikali 9,8 dikali 0,5 sama dengan 58,8 Newton. Kedua, gaya gesek kinetik adalah 0,25 dikali 12 dikali 9,8 dikali kosinus 30 derajat atau sekitar 0,866, menghasilkan 25,46 Newton. Ketiga, gaya total ke atas bidang adalah 110 dikurangi 58,8 dikurangi 25,46 sama dengan 25,74 Newton. Bagi dengan massa 12 kilogram, kita peroleh 2,145 meter per sekon kuadrat, yang dibulatkan satu desimal menjadi 2,1 meter per sekon kuadrat.',
      jawabanAkhir:
        'Jadi, percepatan troli menaiki bidang miring adalah 2,1 meter per sekon kuadrat.',
    },
  },
  {
    id: 10,
    topic: 'Usaha dan Energi',
    title: 'Usaha Gaya Konstan dari Perkalian Titik Vektor',
    questionText:
      'Suatu partikel telah bergerak sepanjang lintasan di bidang $xy$ dari titik 1 yang vektor posisinya $\\vec{r}_1 = (1{,}5\\hat{i} + 2{,}0\\hat{j})\\text{ m}$ ke titik 2 dengan vektor posisi $\\vec{r}_2 = (4{,}5\\hat{i} - 1{,}2\\hat{j})\\text{ m}$. Selama waktu tersebut, partikel mengalami gaya konstan $\\vec{F} = (3{,}5\\hat{i} + 5{,}0\\hat{j})\\text{ N}$. Kerja yang dilakukan gaya $\\vec{F}$ adalah ... Joule.',
    promptEnding: 'Kerja (usaha) yang dilakukan gaya F (dalam Joule):',
    unit: 'Joule',
    answerValue: -5.5,
    answerFormatted: '-5,5',
    tolerance: 0.1,
    hasStimulusDiagram: true,
    stimulusCaption:
      'Vektor posisi awal r⃗₁, vektor posisi akhir r⃗₂, dan vektor perpindahan Δr⃗ = r⃗₂ - r⃗₁ pada bidang koordinat xy.',
    fbdCaption:
      'Representasi vektor gaya konstan F⃗ dan vektor perpindahan Δr⃗ di bidang xy untuk menghitung perkalian titik W = F⃗ · Δr⃗.',
    explanation: {
      memahamiPermasalahan: [
        'Sebuah partikel berpindah di bidang datar $xy$ dari posisi awal $\\vec{r}_1 = (1{,}5\\hat{i} + 2{,}0\\hat{j})\\text{ m}$ ke posisi akhir $\\vec{r}_2 = (4{,}5\\hat{i} - 1{,}2\\hat{j})\\text{ m}$.',
        'Selama berpindah, bekerja gaya konstan $\\vec{F} = (3{,}5\\hat{i} + 5{,}0\\hat{j})\\text{ N}$.',
        'Kita diminta menentukan kerja (usaha) $W$ yang dilakukan oleh gaya tersebut dalam satuan Joule.',
      ],
      pengetahuanAwal: [
        'Usaha oleh gaya konstan $\\vec{F}$ hanya bergantung pada vektor perpindahan bersih $\\Delta\\vec{r} = \\vec{r}_2 - \\vec{r}_1$, tidak bergantung pada bentuk lintasan yang ditempuh di antara titik 1 dan titik 2.',
        'Perkalian titik (dot product) dua vektor $\\vec{A} = A_x\\hat{i} + A_y\\hat{j}$ dan $\\vec{B} = B_x\\hat{i} + B_y\\hat{j}$ didefinisikan sebagai $\\vec{A}\\cdot\\vec{B} = A_x B_x + A_y B_y$.',
        'Usaha dapat bernilai negatif apabila sudut antara gaya dan perpindahan lebih dari $90^\\circ$ (gaya cenderung menghambat gerak sepanjang perpindahan).',
      ],
      visualisasiFbd: [
        'Vektor perpindahan $\\Delta\\vec{r}$ mengarah ke kanan-bawah ($\\Delta x > 0, \\Delta y < 0$), sedangkan vektor gaya $\\vec{F}$ mengarah ke kanan-atas ($F_x > 0, F_y > 0$).',
        'Karena komponen vertikal gaya ($+5{,}0\\text{ N}$) berlawanan dengan komponen vertikal perpindahan ($-3{,}2\\text{ m}$) dan kontribusinya lebih dominan, sudut antara $\\vec{F}$ dan $\\Delta\\vec{r}$ tumpul ($> 90^\\circ$).',
      ],
      prinsipHukum: [
        'Definisi Usaha Mekanik oleh Gaya Konstan dalam Bentuk Vektor.',
      ],
      rumusUtama: [
        {
          label: 'Usaha oleh Gaya Konstan',
          latex: 'W = \\vec{F} \\cdot \\Delta\\vec{r} = \\vec{F} \\cdot (\\vec{r}_2 - \\vec{r}_1) = F_x\\Delta x + F_y\\Delta y',
          explanation:
            'Proyeksi gaya sepanjang arah perpindahan dikalikan besar perpindahan menghasilkan kerja skalar.',
          symbols: [
            '$W$: usaha/kerja ($\\text{J}$)',
            '$\\vec{F}$: vektor gaya konstan ($\\text{N}$)',
            '$\\Delta\\vec{r}$: vektor perpindahan ($\\text{m}$)',
          ],
          validity: 'Berlaku tepat ketika $\\vec{F}$ konstan baik besar maupun arahnya selama perpindahan.',
        },
      ],
      penurunanPersamaan: [
        'Hitung vektor perpindahan terlebih dahulu: $$\\Delta\\vec{r} = \\vec{r}_2 - \\vec{r}_1 = (4{,}5 - 1{,}5)\\hat{i} + (-1{,}2 - 2{,}0)\\hat{j} = (3{,}0\\hat{i} - 3{,}2\\hat{j})\\text{ m}$$',
        'Lalu terapkan perkalian titik dengan $\\vec{F} = (3{,}5\\hat{i} + 5{,}0\\hat{j})\\text{ N}$.',
      ],
      langkahPenyelesaian: [
        'Diketahui: $\\Delta x = 3{,}0\\text{ m}$, $\\Delta y = -3{,}2\\text{ m}$, $F_x = 3{,}5\\text{ N}$, $F_y = 5{,}0\\text{ N}$.',
        'Hitung kerja pada sumbu-$x$: $W_x = F_x \\Delta x = 3{,}5 \\times 3{,}0 = 10{,}5\\text{ J}$.',
        'Hitung kerja pada sumbu-$y$: $W_y = F_y \\Delta y = 5{,}0 \\times (-3{,}2) = -16{,}0\\text{ J}$.',
        'Jumlahkan keduanya: $W = 10{,}5 + (-16{,}0) = -5{,}5\\text{ J}$.',
      ],
      jawabanAkhirCatatan: 'Kerja yang dilakukan gaya F adalah -5,5 Joule.',
      pemeriksaanFisika: [
        'Cek sudut vektor: $|\\vec{F}| = \\sqrt{3{,}5^2 + 5^2} = \\sqrt{37{,}25} \\approx 6{,}10\\text{ N}$, $|\\Delta\\vec{r}| = \\sqrt{3^2 + 3{,}2^2} = \\sqrt{19{,}24} \\approx 4{,}39\\text{ m}$. Nilai $\\cos\\theta = \\frac{-5{,}5}{6{,}10 \\times 4{,}39} \\approx -0{,}205 < 0$, sesuai dengan sudut tumpul ($\\approx 101{,}9^\\circ$) dan tanda negatif pada usaha.',
        'Satuan $\\text{N} \\cdot \\text{m} = \\text{Joule}$, tepat.',
      ],
    },
    narration: {
      soal: 'Soal nomor 10, topik Usaha dan Energi. Suatu partikel bergerak di bidang x y dari titik 1 dengan vektor posisi r 1 sama dengan 1,5 i ditambah 2,0 j meter ke titik 2 dengan vektor posisi r 2 sama dengan 4,5 i dikurangi 1,2 j meter. Selama bergerak, partikel mengalami gaya konstan F sama dengan 3,5 i ditambah 5,0 j Newton. Tentukan kerja yang dilakukan gaya F dalam satuan Joule.',
      stimulus:
        'Pada bidang koordinat x y, posisi awal r 1 berada di kuadran pertama dan posisi akhir r 2 berada di kuadran keempat, sehingga vektor perpindahan delta r mengarah ke kanan bawah.',
      fbd: 'Diagram menampilkan vektor perpindahan delta r ke kanan bawah dan vektor gaya F ke kanan atas. Sudut antara kedua vektor ini melebihi 90 derajat, yang menandakan kerja akan bernilai negatif.',
      pengetahuanAwal:
        'Untuk gaya yang konstan, kerja tidak bergantung pada bentuk lintasan, melainkan hanya pada perkalian titik atau dot product antara vektor gaya dan vektor perpindahan bersihnya.',
      prinsip:
        'Prinsip yang digunakan adalah definisi usaha mekanik dalam bentuk perkalian titik vektor.',
      rumus:
        'Usaha W sama dengan F dot delta r, yaitu F x dikalikan delta x ditambah F y dikalikan delta y.',
      langkah:
        'Pertama, hitung vektor perpindahan delta r sama dengan r 2 dikurangi r 1. Untuk komponen x: 4,5 dikurangi 1,5 sama dengan 3,0 meter. Untuk komponen y: minus 1,2 dikurangi 2,0 sama dengan minus 3,2 meter. Kedua, lakukan perkalian titik dengan gaya F: 3,5 dikali 3,0 sama dengan 10,5, ditambah 5,0 dikali minus 3,2 sama dengan minus 16,0. Jumlahnya adalah 10,5 dikurangi 16,0 sama dengan minus 5,5 Joule.',
      jawabanAkhir:
        'Jadi, kerja yang dilakukan oleh gaya tersebut adalah minus 5,5 Joule. Tanda negatif wajib disertakan karena gaya lebih banyak bekerja melawan komponen perpindahan vertikal.',
    },
  },
];
