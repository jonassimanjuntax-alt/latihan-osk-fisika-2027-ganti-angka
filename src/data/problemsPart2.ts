import { PhysicsProblem } from '../types/physics';

export const PROBLEMS_PART_2: PhysicsProblem[] = [
  {
    id: 11,
    topic: 'Usaha dan Energi',
    title: 'Dua Kubus Terhubung Pegas yang Terkompresi',
    questionText:
      'Suatu sistem terdiri dari dua kubus identik, masing-masing bermassa $m = 0{,}8\\text{ kg}$, yang dihubungkan oleh pegas tanpa massa (dengan konstanta pegas $k = 96{,}0\\text{ N/m}$), yang dalam keadaan tidak tertekan memiliki panjang $\\ell$. Pegas kemudian ditekan sehingga panjangnya menjadi $\\ell\' = \\ell - \\Delta\\ell$, dan untuk mempertahankan panjang pegas tersebut tetap demikian, kubus-kubus tersebut dihubungkan oleh benang yang akan terbakar pada saat tertentu. Setelah benang terbakar, agar kubus bawah tepat dapat lepas kontak dari lantai, maka nilai minimum $\\Delta\\ell$ pada kompresi awal pegas adalah ... $\\text{cm}$ (gunakan $g = 9{,}8\\text{ m/s}^2$).',
    promptEnding: 'Kompresi awal pegas Δℓ (dalam cm):',
    unit: 'cm',
    answerValue: 24.5,
    answerFormatted: '24,5',
    tolerance: 0.1,
    hasStimulusDiagram: true,
    stimulusCaption:
      'Dua kubus identik bermassa m = 0,8 kg dihubungkan oleh pegas terkompresi (k = 96,0 N/m) dan ditahan oleh seutas benang di atas lantai.',
    fbdCaption:
      'Diagram benda bebas kubus atas dan kubus bawah saat pegas mengalami regangan maksimum x₁ di mana gaya normal lantai pada kubus bawah menjadi nol.',
    explanation: {
      memahamiPermasalahan: [
        'Dua kubus bermassa sama $m = 0{,}8\\text{ kg}$ disusun vertikal: kubus bawah diam di lantai, kubus atas berada di atas pegas ideal ($k = 96{,}0\\text{ N/m}$).',
        'Awalnya pegas tertekan sebesar $\\Delta\\ell$ dari panjang alami $\\ell$ dan diikat benang dalam keadaan diam.',
        'Ketika benang putus terbakar, kubus atas melenting ke atas. Kita mencari kompresi awal minimum $\\Delta\\ell$ agar pada puncak gerak kubus atas, pegas tertarik cukup kuat untuk mengangkat kubus bawah tepat lepas dari lantai.',
      ],
      pengetahuanAwal: [
        'Energi potensial elastis pegas adalah $E_p = \\frac{1}{2}kx^2$, di mana $x$ diukur dari panjang alami (relaks) pegas $\\ell$, baik saat tertekan maupun teregang.',
        'Syarat kubus bawah tepat lepas kontak dari lantai adalah gaya normal lantai menjadi nol ($N = 0$), sehingga gaya tarik pegas ke atas pada kubus bawah tepat mengimbangi beratnya $mg$.',
      ],
      visualisasiFbd: [
        'Pada posisi awal (tertekan $\\Delta\\ell$): kubus atas mengalami berat $mg$ ke bawah, dorongan pegas $k\\Delta\\ell$ ke atas, dan tarikan benang ke bawah.',
        'Pada titik tertinggi kubus atas ($v = 0$, pegas teregang $x_1$ di atas panjang alami): kubus bawah mengalami berat $mg$ ke bawah dan tarikan pegas $k x_1$ ke atas, dengan gaya normal lantai $N = 0$.',
      ],
      prinsipHukum: [
        'Hukum Kekekalan Energi Mekanik (pada kubus atas dan pegas selama kubus bawah masih diam di lantai) dan Hukum I Newton untuk syarat lepas kontak.',
      ],
      rumusUtama: [
        {
          label: 'Syarat Kubus Bawah Lepas Kontak',
          latex: 'k x_1 = mg \\implies x_1 = \\frac{mg}{k}',
          explanation:
            'Saat gaya normal lantai $N = 0$, tarikan pegas ke atas tepat sama dengan berat kubus bawah.',
          symbols: [
            '$x_1$: pertambahan panjang pegas saat lepas kontak ($\\text{m}$)',
            '$k$: konstanta pegas ($\\text{N/m}$)',
            '$m$: massa tiap kubus ($\\text{kg}$)',
          ],
          validity: 'Berlaku tepat ketika kubus bawah mulai terangkat dari lantai.',
        },
        {
          label: 'Kompresi Awal Minimum',
          latex: '\\Delta\\ell = \\frac{3mg}{k}',
          explanation:
            'Diperoleh dari kekekalan energi mekanik kubus atas antara posisi tertekan $-\\Delta\\ell$ dan teregang $+x_1$.',
          symbols: ['$\\Delta\\ell$: kompresi awal pegas dari panjang alami ($\\text{m}$)'],
          validity: 'Berlaku selama kubus bawah tetap diam hingga kubus atas mencapai puncak.',
        },
      ],
      penurunanPersamaan: [
        'Tetapkan acuan ketinggian $y = 0$ kubus atas saat panjang pegas sama dengan panjang alami $\\ell$. Awalnya kubus atas berada di $y_i = -\\Delta\\ell$ dengan kecepatan nol.',
        'Agar kompresi awal minimum, pada titik tertinggi kubus atas ($y_f = +x_1$) kecepatannya tepat nol ($v_f = 0$). Kekekalan energi mekanik memberikan: $$\\frac{1}{2}k(\\Delta\\ell)^2 - mg\\Delta\\ell = \\frac{1}{2}k x_1^2 + mg x_1$$',
        'Kalikan kedua ruas dengan $\\frac{2}{k}$ dan substitusikan $x_1 = \\frac{mg}{k}$: $$(\\Delta\\ell)^2 - 2\\left(\\frac{mg}{k}\\right)\\Delta\\ell = \\left(\\frac{mg}{k}\\right)^2 + 2\\left(\\frac{mg}{k}\\right)^2 = 3\\left(\\frac{mg}{k}\\right)^2$$',
        'Lengkapi kuadrat sempurna: $$\\left(\\Delta\\ell - \\frac{mg}{k}\\right)^2 = 4\\left(\\frac{mg}{k}\\right)^2 \\implies \\Delta\\ell - \\frac{mg}{k} = 2\\frac{mg}{k} \\implies \\Delta\\ell = \\frac{3mg}{k}$$',
      ],
      langkahPenyelesaian: [
        'Diketahui: $m = 0{,}8\\text{ kg}$, $k = 96{,}0\\text{ N/m}$, $g = 9{,}8\\text{ m/s}^2$.',
        'Substitusikan ke persamaan $\\Delta\\ell = \\frac{3mg}{k}$: $$\\Delta\\ell = \\frac{3 \\times 0{,}8 \\times 9{,}8}{96{,}0} = \\frac{23{,}52}{96{,}0} = 0{,}245\\text{ m}$$',
        'Konversikan ke satuan sentimeter: $0{,}245\\text{ m} = 24{,}5\\text{ cm}$.',
      ],
      jawabanAkhirCatatan: 'Kompresi awal pegas Δℓ adalah 24,5 cm.',
      pemeriksaanFisika: [
        'Periksa energi: pada posisi setimbang statis kubus atas, pegas tertekan $x_{\\text{eq}} = \\frac{mg}{k} = 8{,}17\\text{ cm}$. Simpangan awal terhadap titik setimbang adalah $\\Delta\\ell - x_{\\text{eq}} = 2 x_{\\text{eq}} = 16{,}33\\text{ cm}$, sehingga amplitudo osilasi harmoniknya $16{,}33\\text{ cm}$, mengangkat kubus atas ke $x_{\\text{eq}} - 16{,}33\\text{ cm}$ (yakni teregang $8{,}17\\text{ cm}$). Simetri harmonik terkonfirmasi!',
        'Satuan $\\text{N} / (\\text{N/m}) = \\text{m} = 100\\text{ cm}$, tepat.',
      ],
    },
    narration: {
      soal: 'Soal nomor 11, topik Usaha dan Energi. Dua kubus identik masing-masing bermassa 0,8 kilogram dihubungkan pegas dengan konstanta 96,0 Newton per meter. Pegas ditekan sebesar delta L dan ditahan dengan benang. Setelah benang terbakar, tentukan nilai minimum delta L dalam sentimeter agar kubus bawah tepat lepas kontak dari lantai, dengan percepatan gravitasi 9,8 meter per sekon kuadrat.',
      stimulus:
        'Gambar menunjukkan dua balok bermassa m tersusun vertikal dengan sebuah pegas terkompresi di antaranya dan benang penahan di sisi luar.',
      fbd: 'Saat kubus bawah tepat akan terangkat, gaya normal dari lantai menjadi nol, sehingga tarikan pegas ke atas sebesar k dikali x 1 harus tepat sama dengan gaya berat kubus bawah yaitu m g.',
      pengetahuanAwal:
        'Kita memilih ketinggian nol kubus atas saat pegas berada di panjang alaminya. Pada posisi tertekan sejauh delta L, kubus atas berada pada ketinggian negatif minus delta L, dan pegas menyimpan energi potensial setengah k delta L kuadrat.',
      prinsip:
        'Kita menerapkan Hukum Kekekalan Energi Mekanik untuk kubus atas dan pegas, serta syarat kesetimbangan lepas kontak pada kubus bawah.',
      rumus:
        'Syarat lepas kontak memberikan x 1 sama dengan m g dibagi k. Dari kekekalan energi mekanik, setengah k delta L kuadrat dikurangi m g delta L sama dengan setengah k x 1 kuadrat ditambah m g x 1, yang disederhanakan menjadi delta L sama dengan 3 m g dibagi k.',
      langkah:
        'Substitusikan angka yang diketahui: delta L sama dengan 3 dikali 0,8 dikali 9,8 dibagi 96,0. Hasil pembilangnya 23,52, dibagi 96,0 menjadi 0,245 meter. Ubah ke sentimeter dengan mengalikannya 100, sehingga diperoleh tepat 24,5 sentimeter.',
      jawabanAkhir:
        'Jadi, kompresi awal minimum pegas adalah 24,5 sentimeter. Secara simetri osilasi harmonik, ini tepat tiga kali penekanan statis satu balok.',
    },
  },
  {
    id: 12,
    topic: 'Usaha dan Energi',
    title: 'Jarak Tempuh Maksimum Mobil dengan Massa Bahan Bakar Berubah',
    questionText:
      'Mobil dengan massa total $M$ (termasuk bahan bakar dan pengendara) bergerak dengan laju konstan melawan gaya hambat jalanan yang bergantung pada berat total mobil, $f = -\\mu Mg$, dengan koefisien $\\mu = 0{,}12$. Saat bahan bakar kosong, massa total mobil adalah $M = m$ dan saat bahan bakar penuh massa total mobil adalah $M = m + m_b$. Menurut pengendara, energi yang dapat dihasilkan per massa bensin adalah sebesar $\\eta = 2450{,}0\\text{ kJ/kg}$. Jarak maksimum yang dapat ditempuh mobil sebelum kehabisan bensin adalah ... $\\text{km}$. Diketahui $m = 5 m_b$ dan $g = 9{,}8\\text{ m/s}^2$.',
    promptEnding: 'Jarak maksimum yang dapat ditempuh mobil (dalam km):',
    unit: 'km',
    answerValue: 379.8,
    answerFormatted: '379,8',
    tolerance: 0.3,
    hasStimulusDiagram: true,
    stimulusCaption:
      'Mobil bermassa total M(x) bergerak dengan kelajuan konstan melawan gaya hambat f = -μMg sepanjang lintasan mendatar hingga bahan bakar m_b habis.',
    fbdCaption:
      'Diagram benda bebas mobil: gaya dorong mesin F_dorong = μMg mengimbangi gaya hambat f = -μMg agar laju tetap konstan saat massa M berkurang secara kontinu.',
    explanation: {
      memahamiPermasalahan: [
        'Sebuah mobil melaju dengan kecepatan konstan di jalan datar. Selama melaju, bensin terbakar sehingga massa total mobil $M$ berkurang secara kontinu dari $M_i = m + m_b$ menjadi $M_f = m$.',
        'Karena laju konstan, gaya dorong mesin harus selalu sama besar dengan gaya hambat $f = \\mu M g$ dengan $\\mu = 0{,}12$.',
        'Setiap $1\\text{ kg}$ bensin yang terbakar menghasilkan energi $\\eta = 2450{,}0\\text{ kJ/kg} = 2{,}45 \\times 10^6\\text{ J/kg}$ untuk melakukan usaha melawan hambatan.',
        'Diketahui $m = 5 m_b$. Kita mencari jarak maksimum $x_{\\text{maks}}$ dalam $\\text{km}$.',
      ],
      pengetahuanAwal: [
        'Apabila bahan bakar habis terpakai sebesar massa kecil $dm_b > 0$, maka massa total mobil berubah sebesar $dM = -dm_b$ (tanda minus karena massa mobil berkurang).',
        'Energi mekanik yang tersedia dari pembakaran massa bensin $dm_b$ adalah $dE = \\eta\\,dm_b = -\\eta\\,dM$.',
        'Usaha elemen gaya hambat sepanjang perpindahan kecil $dx$ adalah $dW = F_{\\text{dorong}}\\,dx = \\mu M g\\,dx$.',
      ],
      visualisasiFbd: [
        'Pada setiap saat: arah vertikal $N = Mg$, arah horizontal $F_{\\text{dorong}} - \\mu Mg = 0$ (laju konstan).',
        'Kesalahan umum pemula adalah menganggap gaya hambat konstan menggunakan massa rata-rata atau massa awal saja; karena $M$ berubah terus, kita wajib memakai kalkulus integral.',
      ],
      prinsipHukum: [
        'Teorema Usaha–Energi pada Sistem Bermassa Berubah (Variabel Massa) dan Kalkulus Integral.',
      ],
      rumusUtama: [
        {
          label: 'Neraca Energi Diferensial',
          latex: '-\\eta\\,dM = \\mu M g\\,dx',
          explanation:
            'Energi kimia dari pengurangan massa bensin $-dM$ digunakan sepenuhnya untuk mengatasi usaha gaya hambat sepanjang $dx$.',
          symbols: [
            '$\\eta$: energi spesifik bahan bakar ($\\text{J/kg}$)',
            '$M$: massa total sesaat mobil ($\\text{kg}$)',
            '$\\mu$: koefisien hambatan',
          ],
          validity: 'Berlaku selama kelajuan konstan ($\\Delta E_k = 0$) dan seluruh energi $\\eta$ menjadi usaha gerak.',
        },
        {
          label: 'Jarak Tempuh Maksimum',
          latex: 'x_{\\text{maks}} = \\frac{\\eta}{\\mu g}\\ln\\left(\\frac{m + m_b}{m}\\right)',
          explanation: 'Hasil integrasi dari $M_i = m + m_b$ sampai $M_f = m$.',
          symbols: ['$x_{\\text{maks}}$: jarak tempuh total hingga bensin habis ($\\text{m}$)'],
          validity: 'Berlaku untuk $m_b > 0$ dan gaya hambat proporsional terhadap berat total.',
        },
      ],
      penurunanPersamaan: [
        'Pisahkan variabel $dx$ dan $M$ dari $-\\eta\\,dM = \\mu M g\\,dx$: $$dx = -\\frac{\\eta}{\\mu g}\\frac{dM}{M}$$',
        'Integralkan kedua ruas dari $x = 0$ ($M = m + m_b$) hingga $x = x_{\\text{maks}}$ ($M = m$): $$x_{\\text{maks}} = -\\frac{\\eta}{\\mu g}\\int_{m + m_b}^{m} \\frac{dM}{M} = \\frac{\\eta}{\\mu g}\\ln\\left(\\frac{m + m_b}{m}\\right)$$',
      ],
      langkahPenyelesaian: [
        'Diketahui: $\\mu = 0{,}12$, $g = 9{,}8\\text{ m/s}^2$, $\\eta = 2450{,}0\\text{ kJ/kg} = 2{,}45 \\times 10^6\\text{ J/kg}$, $m = 5 m_b$.',
        'Hitung rasio massa: $\\frac{m + m_b}{m} = 1 + \\frac{m_b}{5m_b} = 1{,}2$, dan $\\ln(1{,}2) \\approx 0{,}18232156$.',
        'Hitung $\\frac{\\eta}{\\mu g} = \\frac{2{,}45 \\times 10^6}{0{,}12 \\times 9{,}8} = \\frac{2{,}45 \\times 10^6}{1{,}176} = 2{,}083333 \\times 10^6\\text{ m}$.',
        'Kalikan dengan $\\ln(1{,}2)$: $x_{\\text{maks}} = 2{,}083333 \\times 10^6 \\times 0{,}18232156 = 379836{,}6\\text{ m} = 379{,}8366\\text{ km}$.',
        'Dibulatkan satu angka di belakang koma menjadi $379{,}8\\text{ km}$.',
      ],
      jawabanAkhirCatatan: 'Jarak maksimum yang dapat ditempuh mobil adalah 379,8 km.',
      pemeriksaanFisika: [
        'Uji taksiran kasar tanpa integral: jika dianggap massa rata-rata $M_{\\text{rata}} = 5{,}5 m_b$, maka $x \\approx \\frac{\\eta m_b}{\\mu (5{,}5 m_b) g} = \\frac{2{,}45 \\times 10^6}{1{,}176 \\times 5{,}5} \\approx 378{,}8\\text{ km}$. Nilai eksak $379{,}8\\text{ km}$ sangat dekat dan sedikit lebih besar karena mobil menghabiskan lebih banyak jarak saat sudah ringan.',
        'Satuan: $\\frac{\\text{J/kg}}{\\text{m/s}^2} = \\frac{\\text{m}^2/\\text{s}^2}{\\text{m/s}^2} = \\text{m}$, tepat.',
      ],
    },
    narration: {
      soal: 'Soal nomor 12, topik Usaha dan Energi. Mobil dengan massa total M bergerak dengan laju konstan melawan gaya hambat jalanan f sama dengan minus mu M g dengan koefisien mu sama dengan 0,12. Saat bensin kosong massanya m, saat penuh m ditambah m b, dengan m sama dengan 5 m b. Energi per massa bensin adalah eta sama dengan 2450,0 kilojoule per kilogram. Tentukan jarak maksimum dalam kilometer yang ditempuh mobil sebelum kehabisan bensin, dengan g sama dengan 9,8 meter per sekon kuadrat.',
      stimulus:
        'Mobil bergerak mendatar melawan hambatan jalan yang besarnya terus berkurang secara perlahan seiring berkurangnya massa bahan bakar.',
      fbd: 'Karena mobil melaju dengan kecepatan tetap, gaya dorong maju dari mesin selalu sama besar dengan gaya hambat ke belakang yaitu mu M g.',
      pengetahuanAwal:
        'Jika kita memandang pengurangan kecil massa bensin sebesar minus d M, energi yang dibebaskan adalah minus eta d M. Energi inilah yang dipakai sebagai usaha untuk menempuh jarak d x melawan gaya hambat.',
      prinsip:
        'Kita menerapkan Teorema Usaha dan Energi dalam bentuk diferensial serta integral logaritma natural untuk sistem bermassa berubah.',
      rumus:
        'Dengan memisahkan variabel dan mengintegralkannya dari massa awal m tambah m b sampai massa akhir m, jarak maksimum x maks sama dengan eta dibagi mu g dikalikan logaritma natural dari m tambah m b dibagi m.',
      langkah:
        'Ubah satuan eta menjadi 2 juta 450 ribu Joule per kilogram. Karena m sama dengan 5 m b, perbandingan massa m tambah m b per m adalah 1,2. Nilai logaritma natural 1,2 sekitar 0,18232. Bagi 2 juta 450 ribu dengan 0,12 dikali 9,8 yaitu 1,176, hasilnya 2 koma 083 juta meter. Kalikan dengan 0,18232, diperoleh 379 ribu 837 meter atau 379,8 kilometer.',
      jawabanAkhir:
        'Jadi, jarak maksimum yang dapat ditempuh mobil sebelum kehabisan bensin adalah 379,8 kilometer.',
    },
  },
  {
    id: 13,
    topic: 'Momentum Linear',
    title: 'Impuls Dorongan Dua Perahu di Atas Air',
    questionText:
      'Seseorang di perahu 1 mendorong seseorang di perahu 2 dengan gaya konstan $F = 58\\text{ N}$ untuk menjauhkan kedua perahu. Massa total perahu 1 adalah $145\\text{ kg}$ dan perahu kedua adalah $280\\text{ kg}$. Besar momentum dari setiap perahu setelah diberikan dorongan selama $\\Delta t = 1{,}6\\text{ detik}$ adalah ... $\\text{Ns}$.',
    promptEnding: 'Besar momentum tiap perahu (dalam Ns):',
    unit: 'Ns',
    answerValue: 92.8,
    answerFormatted: '92,8',
    tolerance: 0.1,
    hasStimulusDiagram: true,
    stimulusCaption:
      'Dua perahu (145 kg dan 280 kg) saling mendorong dengan gaya F = 58 N ke arah berlawanan sepanjang sumbu-x selama Δt = 1,6 detik.',
    fbdCaption:
      'Pasangan gaya aksi–reaksi menurut Hukum III Newton: F₁₂ = -58 N bekerja pada perahu 1 dan F₂₁ = +58 N bekerja pada perahu 2 selama selang waktu Δt yang sama.',
    explanation: {
      memahamiPermasalahan: [
        'Dua perahu mula-mula diam berdekatan di atas air (hambatan air diabaikan). Penumpang di perahu 1 ($m_1 = 145\\text{ kg}$) mendorong penumpang di perahu 2 ($m_2 = 280\\text{ kg}$) dengan gaya $F = 58\\text{ N}$ selama $\\Delta t = 1{,}6\\text{ s}$.',
        'Kita diminta menentukan besar momentum masing-masing perahu setelah dorongan berakhir.',
      ],
      pengetahuanAwal: [
        'Menurut Hukum III Newton (Aksi–Reaksi), jika perahu 1 mengerjakan gaya $F$ ke kanan pada perahu 2, maka perahu 2 mengerjakan gaya reaksi sama besar $F$ ke kiri pada perahu 1.',
        'Impuls $I = F\\Delta t$ didefinisikan sebagai perkalian gaya dengan selang waktu kerjanya, dan menurut Teorema Impuls–Momentum, besar impuls sama dengan perubahan momentum benda: $\\Delta p = F\\Delta t$.',
      ],
      visualisasiFbd: [
        'Perahu 1 menerima gaya mendatar ke kiri sebesar $F = 58\\text{ N}$. Perahu 2 menerima gaya mendatar ke kanan sebesar $F = 58\\text{ N}$.',
        'Walaupun massa kedua perahu berbeda jauh ($145\\text{ kg}$ vs $280\\text{ kg}$), besar gaya dan durasi dorongan pada keduanya persis sama, sehingga besar momentumnya juga sama persis (kecepatannyalah yang berbeda!).',
      ],
      prinsipHukum: [
        'Hukum III Newton (Aksi–Reaksi), Teorema Impuls–Momentum, dan Kekekalan Momentum Linear.',
      ],
      rumusUtama: [
        {
          label: 'Teorema Impuls–Momentum',
          latex: 'p = \\Delta p = F \\Delta t',
          explanation:
            'Karena kedua perahu awalnya diam ($p_0 = 0$), momentum akhirnya langsung sama dengan impuls yang diterima.',
          symbols: [
            '$p$: besar momentum tiap perahu ($\\text{Ns}$)',
            '$F$: besar gaya dorong konstan ($\\text{N}$)',
            '$\\Delta t$: durasi kontak dorongan ($\\text{s}$)',
          ],
          validity: 'Berlaku bila gaya eksternal horizontal lain (seperti hambatan air) diabaikan.',
        },
      ],
      penurunanPersamaan: [
        'Dari Hukum Kekekalan Momentum sistem tertutup: $0 = \\vec{p}_1 + \\vec{p}_2 \\implies |\\vec{p}_1| = |\\vec{p}_2| = p$.',
        'Dari Teorema Impuls–Momentum pada salah satu perahu: $p = F \\Delta t$. Perhatikan bahwa nilai massa $145\\text{ kg}$ dan $280\\text{ kg}$ tidak masuk dalam perhitungan momentum (melainkan hanya membedakan kelajuan $v_1$ dan $v_2$).',
      ],
      langkahPenyelesaian: [
        'Diketahui: $F = 58\\text{ N}$, $\\Delta t = 1{,}6\\text{ s}$.',
        'Hitung momentum tiap perahu: $p = 58 \\times 1{,}6 = 92{,}8\\text{ Ns}$.',
      ],
      jawabanAkhirCatatan: 'Besar momentum dari setiap perahu setelah dorongan adalah 92,8 Ns.',
      pemeriksaanFisika: [
        'Periksa kelajuan tiap perahu: $v_1 = 92{,}8 / 145 = 0{,}64\\text{ m/s}$ ke kiri, $v_2 = 92{,}8 / 280 \\approx 0{,}33\\text{ m/s}$ ke kanan. Momentum total sistem tetap $145(-0{,}64) + 280(0{,}3314) = -92{,}8 + 92{,}8 = 0$, membuktikan kekekalan momentum terpenuhi.',
        'Satuan $\\text{N} \\cdot \\text{s} = \\text{kg}\\cdot\\text{m/s}$, tepat.',
      ],
    },
    narration: {
      soal: 'Soal nomor 13, topik Momentum Linear. Seseorang di perahu 1 mendorong seseorang di perahu 2 dengan gaya F sama dengan 58 Newton untuk menjauhkan kedua perahu. Massa perahu 1 adalah 145 kilogram dan perahu kedua adalah 280 kilogram. Tentukan besar momentum dari setiap perahu setelah diberikan dorongan selama delta t sama dengan 1,6 detik.',
      stimulus:
        'Ilustrasi memperlihatkan perahu 1 di kiri mendapat gaya dorong F ke kiri dan perahu 2 di kanan mendapat gaya F yang sama besar ke kanan.',
      fbd: 'Berdasarkan Hukum ketiga Newton, gaya aksi dan reaksi antara kedua perahu sama besar dan berlawanan arah, serta berlangsung dalam selang waktu yang persis sama.',
      pengetahuanAwal:
        'Walaupun massa kedua perahu berbeda, besar gaya dan durasi dorongan yang diterima oleh perahu 1 maupun perahu 2 adalah identik. Akibatnya, besar impuls dan perubahan momentum kedua perahu juga persis sama. Massa hanya memengaruhi besar kecepatannya saja.',
      prinsip:
        'Kita menggunakan Hukum ketiga Newton, Teorema Impuls dan Momentum, serta Hukum Kekekalan Momentum.',
      rumus:
        'Momentum p sama dengan impuls F dikalikan delta t.',
      langkah:
        'Kita tinggal mengalikan gaya F sebesar 58 Newton dengan selang waktu 1,6 detik. Hasilnya adalah 58 dikali 1,6 sama dengan 92,8 Newton sekon.',
      jawabanAkhir:
        'Jadi, besar momentum dari setiap perahu adalah 92,8 Newton sekon. Perahu yang lebih ringan bergerak lebih cepat ke kiri, sedangkan yang lebih berat bergerak lebih lambat ke kanan, namun momentumnya sama besar.',
    },
  },
  {
    id: 14,
    topic: 'Momentum Linear',
    title: 'Tumbukan Elastis Beruntun Tiga Massa',
    questionText:
      'Tinjau sebuah sistem dengan 3 buah massa seperti pada ilustrasi pada gambar. Awalnya $m_2$ dan $m_3 = 0{,}49\\text{ kg}$ diam, sementara $m_1 = 16\\text{ kg}$ bergerak menuju $m_2$. Pada keadaan akhir, kecepatan $m_3$ maksimum. Jika seluruh peristiwa tumbukan bersifat elastis, maka massa $m_2$ sama dengan ... $\\text{kg}$.',
    promptEnding: 'Massa m₂ agar kecepatan akhir m₃ maksimum (dalam kg):',
    unit: 'kg',
    answerValue: 2.8,
    answerFormatted: '2,8',
    tolerance: 0.05,
    hasStimulusDiagram: true,
    stimulusCaption:
      'Tiga bola segaris: m₁ = 16 kg bergerak menumbuk m₂ yang diam, lalu m₂ bergerak menumbuk m₃ = 0,49 kg yang diam.',
    fbdCaption:
      'Skema transfer momentum dua tahap: tumbukan elastis I antara m₁ dan m₂, diikuti tumbukan elastis II antara m₂ dan m₃.',
    explanation: {
      memahamiPermasalahan: [
        'Tiga benda terletak segaris di atas lintasan licin. Benda pertama bermassa $m_1 = 16\\text{ kg}$ bergerak dengan kelajuan awal $v_1$ menumbuk benda kedua $m_2$ yang diam.',
        'Setelah itu, $m_2$ bergerak maju dan menumbuk benda ketiga bermassa $m_3 = 0{,}49\\text{ kg}$ yang juga diam.',
        'Semua tumbukan berlangsung secara lenting sempurna (elastis). Kita diminta menentukan nilai massa perantara $m_2$ agar kelajuan akhir $m_3$ menjadi maksimum.',
      ],
      pengetahuanAwal: [
        'Pada tumbukan elastis satu dimensi antara benda bermassa $m_A$ (kelajuan $u$) menumbuk benda bermassa $m_B$ yang diam, kelajuan benda $m_B$ setelah tumbukan adalah $v_B = \\frac{2m_A}{m_A + m_B}u$.',
        'Jika $m_2$ terlalu kecil, ia hanya terpental balik tanpa membawa banyak momentum. Jika $m_2$ terlalu besar, kelajuan yang didapat $m_2$ dari $m_1$ sangat kecil. Jadi ada nilai optimum di antara $m_3$ dan $m_1$.',
      ],
      visualisasiFbd: [
        'Karena tumbukan terjadi sesaat pada lintasan horizontal licin, tidak ada impuls gaya eksternal mendatar. Gaya normal dan gaya berat saling meniadakan secara vertikal.',
      ],
      prinsipHukum: [
        'Hukum Kekekalan Momentum Linear, Hukum Kekekalan Energi Kinetik (Tumbukan Elastis), dan Optimasi dengan Ketaksamaan AM–GM atau Turunan.',
      ],
      rumusUtama: [
        {
          label: 'Kecepatan Benda Kedua Setelah Tumbukan I',
          latex: 'v_2\' = \\frac{2m_1}{m_1 + m_2} v_1',
          explanation:
            'Diperoleh dari kekekalan momentum $m_1 v_1 = m_1 v_1\' + m_2 v_2\'$ dan koefisien restitusi $e = 1$.',
          symbols: [
            '$v_1$: kecepatan awal $m_1$ ($\\text{m/s}$)',
            '$v_2\'$: kecepatan $m_2$ setelah ditumbuk $m_1$ ($\\text{m/s}$)',
          ],
          validity: 'Berlaku untuk tumbukan elastis segaris dengan $m_2$ awalnya diam.',
        },
        {
          label: 'Massa Optimum Perantara',
          latex: 'm_2 = \\sqrt{m_1 m_3}',
          explanation:
            'Rata-rata geometris antara $m_1$ dan $m_3$ memaksimumkan transfer kecepatan ke benda ketiga.',
          symbols: ['$m_2$: massa perantara optimum ($\\text{kg}$)'],
          validity: 'Berlaku selama $m_1 > m_2 > m_3$ sehingga tidak terjadi tumbukan susulan.',
        },
      ],
      penurunanPersamaan: [
        'Pada tumbukan kedua antara $m_2$ (kecepatan $v_2\'$) dan $m_3$ (diam), kecepatan akhir $m_3$ adalah: $$v_3\'\' = \\frac{2m_2}{m_2 + m_3} v_2\' = \\frac{4 m_1 m_2}{(m_1 + m_2)(m_2 + m_3)} v_1$$',
        'Agar $v_3\'\'$ maksimum, penyebut dibagi $m_2$ harus minimum. Definisikan: $$g(m_2) = \\frac{(m_1 + m_2)(m_2 + m_3)}{m_2} = m_2 + m_1 + m_3 + \\frac{m_1 m_3}{m_2}$$',
        'Menurut ketaksamaan AM–GM, $m_2 + \\frac{m_1 m_3}{m_2} \\ge 2\\sqrt{m_1 m_3}$, dengan kesamaan (nilai minimum) tercapai ketika: $$m_2 = \\frac{m_1 m_3}{m_2} \\implies m_2 = \\sqrt{m_1 m_3}$$',
      ],
      langkahPenyelesaian: [
        'Diketahui: $m_1 = 16\\text{ kg}$, $m_3 = 0{,}49\\text{ kg}$.',
        'Hitung $m_2 = \\sqrt{16 \\times 0{,}49} = \\sqrt{16} \\times \\sqrt{0{,}49} = 4 \\times 0{,}7 = 2{,}8\\text{ kg}$.',
      ],
      jawabanAkhirCatatan: 'Massa m₂ agar kecepatan akhir m₃ maksimum adalah 2,8 kg.',
      pemeriksaanFisika: [
        'Periksa urutan massa: $m_1 = 16\\text{ kg} > m_2 = 2{,}8\\text{ kg} > m_3 = 0{,}49\\text{ kg}$, sehingga pada tiap tumbukan benda penumbuk lebih berat dan terus bergerak maju tanpa terjadi tumbukan ulang yang rumit.',
        'Dengan $m_2 = 2{,}8\\text{ kg}$, kecepatan yang diterima $m_3$ adalah $v_3\'\' = \\frac{4(16)(2{,}8)}{(18{,}8)(3{,}29)}v_1 \\approx 2{,}90 v_1$, jauh lebih besar dibanding jika $m_1$ langsung menumbuk $m_3$ ($\approx 1{,}94 v_1$).',
      ],
    },
    narration: {
      soal: 'Soal nomor 14, topik Momentum Linear. Tinjau sebuah sistem dengan tiga buah massa segaris. Awalnya m 2 dan m 3 sama dengan 0,49 kilogram diam, sementara m 1 sama dengan 16 kilogram bergerak menuju m 2. Pada keadaan akhir, kecepatan m 3 mencapai nilai maksimum. Jika seluruh peristiwa tumbukan bersifat elastis, berapakah massa m 2 dalam kilogram.',
      stimulus:
        'Ilustrasi menunjukkan tiga bola segaris dari kiri ke kanan: m 1 bergerak ke kanan menumbuk m 2, dan setelah itu m 2 bergerak menumbuk m 3.',
      fbd: 'Selama tumbukan elastis berlangsung secara sesaat di lintasan datar licin, momentum total dan energi kinetik total selalu kekal di setiap tahapan tumbukan.',
      pengetahuanAwal:
        'Pada tumbukan lenting sempurna satu dimensi di mana benda kedua mula-mula diam, kelajuan yang ditransfer ke benda target adalah 2 kali massa penumbuk dibagi jumlah kedua massa dikali kelajuan datang.',
      prinsip:
        'Kita menggunakan Hukum Kekekalan Momentum dan Energi untuk dua tumbukan elastis berturut-turut, lalu mengoptimalkan fungsinya dengan ketaksamaan rata-rata aritmetika dan geometris.',
      rumus:
        'Kecepatan akhir m 3 sama dengan 4 m 1 m 2 dibagi perkalian m 1 tambah m 2 dengan m 2 tambah m 3 dikali v 1. Agar fungsi ini maksimum, massa m 2 harus merupakan rata-rata geometrisnya, yaitu m 2 sama dengan akar kuadrat dari m 1 dikali m 3.',
      langkah:
        'Substitusikan m 1 sama dengan 16 kilogram dan m 3 sama dengan 0,49 kilogram. Akar dari 16 adalah 4, dan akar dari 0,49 adalah 0,7. Kalikan 4 dengan 0,7, hasilnya tepat 2,8 kilogram.',
      jawabanAkhir:
        'Jadi, massa m 2 adalah 2,8 kilogram. Karena berada di antara 16 kilogram dan 0,49 kilogram, m 2 berfungsi sebagai jembatan transfer momentum yang paling efisien.',
    },
  },
  {
    id: 15,
    topic: 'Momentum Linear',
    title: 'Meriam Meluncur di Bidang Miring Lalu Menembak Horizontal',
    questionText:
      'Sebuah meriam bermassa $M = 1{,}0\\text{ ton}$ mulai meluncur bebas menuruni bidang miring halus dengan sudut kemiringan $\\alpha = 30^\\circ$ terhadap horizontal. Setelah meriam menempuh jarak $\\ell = 10\\text{ m}$, sebuah tembakan dilepaskan, dan peluru meninggalkan meriam dalam arah horizontal dengan momentum $p = 11600\\text{ Ns}$. Akibatnya, meriam tepat berhenti. Dengan menganggap massa peluru dapat diabaikan dibandingkan massa meriam, durasi tembakan tersebut adalah ... milidetik (gunakan $g = 9{,}8\\text{ m/s}^2$).',
    promptEnding: 'Durasi tembakan Δt (dalam milidetik):',
    unit: 'milidetik',
    answerValue: 29.9,
    answerFormatted: '29,9',
    tolerance: 0.2,
    hasStimulusDiagram: true,
    stimulusCaption:
      'Meriam bermassa M = 1,0 ton meluncur sejauh ℓ = 10 m di bidang miring licin sudut α = 30°, lalu menembakkan peluru secara mendatar dengan momentum p = 11600 Ns hingga meriam berhenti.',
    fbdCaption:
      'Diagram benda bebas sistem (meriam + peluru) selama durasi tembakan Δt di atas bidang miring licin: gaya normal N tegak lurus bidang dan komponen berat Mg sin α sejajar bidang miring ke bawah.',
    explanation: {
      memahamiPermasalahan: [
        'Meriam bermassa $M = 1{,}0\\text{ ton} = 1000\\text{ kg}$ meluncur dari keadaan diam menuruni bidang miring licin bersudut $\\alpha = 30^\\circ$ sejauh $\\ell = 10\\text{ m}$.',
        'Setelah menempuh jarak tersebut, meriam menembakkan peluru secara horizontal (searah gerak maju ke kanan) dengan momentum $p = 11600\\text{ Ns}$ dalam durasi singkat $\\Delta t$, sehingga meriam menjadi diam ($v_{\\text{akhir}} = 0$).',
        'Mengapa durasi tembakan $\\Delta t$ muncul? Karena selama selang waktu $\\Delta t$, gaya gravitasi tetap memberikan impuls eksternal sepanjang bidang miring!',
      ],
      pengetahuanAwal: [
        'Kecepatan meriam sesaat sebelum menembak (setelah meluncur sejauh $\\ell$ tanpa gesekan) dapat dihitung dengan kekekalan energi mekanik: $v_0 = \\sqrt{2g\\ell\\sin\\alpha}$.',
        'Selama tembakan berlangsung di atas bidang miring licin, gaya normal $N$ dari bidang miring bisa meningkat drastis untuk menahan komponen vertikal/tegak-lurus tolak balik peluru, namun arah gaya normal $N$ selalu **tegak lurus** bidang miring.',
        'Akibatnya, dalam arah **sejajar bidang miring**, gaya normal sama sekali tidak menyumbang impuls! Satu-satunya gaya eksternal sejajar bidang miring adalah komponen berat $Mg\\sin\\alpha$.',
      ],
      visualisasiFbd: [
        'Tinjau sumbu sejajar bidang miring ke bawah ($\\parallel$). Pada sistem (meriam + peluru), gaya eksternal arah $\\parallel$ hanyalah $Mg\\sin\\alpha$ (karena bidang halus tanpa gesekan dan $N \\perp$ bidang).',
        'Vektor momentum peluru yang mendatar memiliki proyeksi sejajar bidang miring sebesar $+p\\cos\\alpha$ dan tegak lurus keluar bidang sebesar $+p\\sin\\alpha$.',
      ],
      prinsipHukum: [
        'Hukum Kekekalan Energi Mekanik (fase meluncur) dan Teorema Impuls–Momentum Sistem pada Arah Sejajar Bidang Miring.',
      ],
      rumusUtama: [
        {
          label: 'Kecepatan Meriam Sebelum Menembak',
          latex: 'v_0 = \\sqrt{2 g \\ell \\sin\\alpha}',
          explanation: 'Diperoleh dari $Mg\\ell\\sin\\alpha = \\frac{1}{2}Mv_0^2$.',
          symbols: [
            '$v_0$: laju meriam sebelum tembakan ($\\text{m/s}$)',
            '$\\ell$: jarak luncur ($\\text{m}$)',
          ],
          validity: 'Berlaku untuk bidang miring licin dengan kecepatan awal nol.',
        },
        {
          label: 'Teorema Impuls–Momentum Sejajar Bidang Miring',
          latex: 'Mg\\sin\\alpha \\cdot \\Delta t = P_{\\parallel,\\text{akhir}} - P_{\\parallel,\\text{awal}} = p\\cos\\alpha - M v_0',
          explanation:
            'Impuls komponen berat sepanjang bidang miring sama dengan perubahan momentum total sistem sepanjang arah bidang.',
          symbols: [
            '$p$: momentum peluru arah horizontal ($\\text{Ns}$)',
            '$\\Delta t$: durasi tembakan ($\\text{s}$)',
          ],
          validity: 'Berlaku karena $m_{\\text{peluru}} \\ll M$ dan $N$ tidak memiliki komponen sejajar bidang miring licin.',
        },
      ],
      penurunanPersamaan: [
        'Momentum awal sistem sejajar bidang miring tepat sebelum tembakan adalah $P_{\\parallel,\\text{awal}} = M v_0$.',
        'Setelah tembakan, meriam diam ($0$) dan peluru membawa momentum horizontal $p$, yang komponennya sejajar bidang miring adalah $p\\cos\\alpha$.',
        'Dari Teorema Impuls–Momentum arah sejajar bidang: $$Mg\\sin\\alpha \\cdot \\Delta t = p\\cos\\alpha - M v_0 \\implies \\Delta t = \\frac{p\\cos\\alpha - M v_0}{M g \\sin\\alpha}$$',
      ],
      langkahPenyelesaian: [
        'Diketahui: $M = 1000\\text{ kg}$, $\\alpha = 30^\\circ$, $\\ell = 10\\text{ m}$, $p = 11600\\text{ Ns}$, $g = 9{,}8\\text{ m/s}^2$.',
        'Hitung kecepatan meriam sebelum tembakan: $v_0 = \\sqrt{2 \\times 9{,}8 \\times 10 \\times \\sin 30^\\circ} = \\sqrt{98} = 9{,}899495\\text{ m/s}$.',
        'Hitung momentum awal meriam: $M v_0 = 1000 \\times 9{,}899495 = 9899{,}495\\text{ Ns}$.',
        'Hitung komponen momentum peluru sejajar bidang: $p\\cos 30^\\circ = 11600 \\times \\frac{\\sqrt{3}}{2} = 10045{,}895\\text{ Ns}$.',
        'Hitung selisih momentum: $\\Delta P_\\parallel = 10045{,}895 - 9899{,}495 = 146{,}400\\text{ Ns}$.',
        'Hitung gaya berat sejajar bidang: $M g \\sin 30^\\circ = 1000 \\times 9{,}8 \\times 0{,}5 = 4900\\text{ N}$.',
        'Hitung durasi tembakan: $\\Delta t = \\frac{146{,}400}{4900} = 0{,}0298775\\text{ s} = 29{,}8775\\text{ milidetik} \\approx 29{,}9\\text{ milidetik}$.',
      ],
      jawabanAkhirCatatan: 'Durasi tembakan tersebut adalah 29,9 milidetik.',
      pemeriksaanFisika: [
        'Perhatikan bahwa $p\\cos 30^\\circ = 10045{,}9\\text{ Ns} > M v_0 = 9899{,}5\\text{ Ns}$, sehingga $\\Delta t > 0$ (masuk akal secara fisis!).',
        'Periksa arah tegak lurus bidang: perubahan momentum keluar bidang adalah $+p\\sin 30^\\circ > 0$, artinya gaya normal $N$ meningkat di atas $Mg\\cos 30^\\circ$ sehingga meriam tetap menekan bidang miring dan tidak melayang selama tembakan.',
      ],
    },
    narration: {
      soal: 'Soal nomor 15, topik Momentum Linear. Sebuah meriam bermassa 1,0 ton meluncur bebas menuruni bidang miring halus bersudut 30 derajat sejauh 10 meter. Lalu tembakan dilepaskan, dan peluru meninggalkan meriam secara horizontal dengan momentum 11600 Newton sekon sehingga meriam tepat berhenti. Dengan menganggap massa peluru jauh lebih kecil dari massa meriam dan g sama dengan 9,8 meter per sekon kuadrat, tentukan durasi tembakan dalam milidetik.',
      stimulus:
        'Meriam bergerak turun sepanjang bidang miring 30 derajat sejauh 10 meter, lalu menembakkan peluru mendatar ke kanan dan berhenti seketika setelah tembakan selesai.',
      fbd: 'Selama tembakan berlangsung, gaya normal N dari bidang miring meningkat besar, namun arahnya selalu tegak lurus permukaan licin sehingga tidak memiliki komponen sejajar bidang miring. Jadi satu-satunya gaya eksternal sejajar bidang miring adalah komponen berat M g sinus 30 derajat.',
      pengetahuanAwal:
        'Karena arah tegak lurus bidang mendapat impuls dari gaya normal yang tidak diketahui besarnya, kita memilih meninjau sumbu yang sejajar bidang miring. Pada sumbu ini, seluruh perubahan momentum sistem selama selang waktu delta t berasal dari impuls komponen gaya berat.',
      prinsip:
        'Kita menggunakan Kekekalan Energi Mekanik untuk mencari laju meriam sebelum menembak, lalu Teorema Impuls Momentum sepanjang arah sejajar bidang miring.',
      rumus:
        'Kecepatan awal v nol sama dengan akar 2 g L sinus alfa. Kemudian M g sinus alfa dikali delta t sama dengan p kosinus alfa dikurangi M dikali v nol.',
      langkah:
        'Hitung v nol: akar dari 2 dikali 9,8 dikali 10 dikali setengah sama dengan akar 98, yaitu 9,8995 meter per sekon. Maka momentum awal meriam 9899,5 Newton sekon. Sementara komponen momentum peluru sejajar bidang adalah 11600 dikali kosinus 30 derajat, hasilnya 10045,9 Newton sekon. Selisihnya adalah 146,4 Newton sekon. Bagi selisih ini dengan M g sinus 30 derajat sebesar 4900 Newton, kita peroleh delta t sama dengan 0,02988 detik atau 29,9 milidetik.',
      jawabanAkhir:
        'Jadi, durasi tembakan tersebut adalah 29,9 milidetik. Angka ini sangat wajar untuk proses letusan peluru meriam.',
    },
  },
  {
    id: 16,
    topic: 'Dinamika Rotasi',
    title: 'Aljabar Vektor Torka, Usaha, dan Gaya Konstan',
    questionText:
      'Suatu vektor posisi $\\vec{r} = 2\\hat{i} + \\hat{j} + a\\hat{k}$ bersatuan meter dan suatu gaya konstan $\\vec{F}$. Di sini, $\\hat{i}$, $\\hat{j}$, dan $\\hat{k}$ berturut-turut adalah vektor satuan pada sumbu $x$, $y$, dan $z$. Vektor torka yang dilakukan gaya $\\vec{F}$ terhadap lengan momen $\\vec{r}$ adalah $\\vec{\\tau}$ sedemikian sehingga $\\vec{r} \\times \\vec{\\tau} = (a - 7)\\hat{i} + (2a + 41)\\hat{j} - 13\\hat{k}$ bersatuan $\\text{N}\\cdot\\text{m}^2$, dengan $a$ adalah suatu konstanta. Besar usaha yang dilakukan gaya $\\vec{F}$ di sepanjang lintasan $\\vec{r}$ adalah $W = (5a + 4)\\text{ Joule}$. Jika kuadrat besar gaya tersebut sama dengan $b$ ($\\text{N}^2$), maka $b - a$ sama dengan ...',
    promptEnding: 'Nilai b - a:',
    unit: '',
    answerValue: 35.0,
    answerFormatted: '35,0',
    tolerance: 0.1,
    hasStimulusDiagram: false,
    fbdCaption:
      'Hubungan ortogonalitas vektor posisi r⃗, vektor torka τ⃗ = r⃗ × F⃗, dan vektor ganda r⃗ × τ⃗ dalam ruang tiga dimensi.',
    explanation: {
      memahamiPermasalahan: [
        'Diketahui vektor posisi $\\vec{r} = 2\\hat{i} + \\hat{j} + a\\hat{k}\\text{ m}$ dengan parameter $a$ yang belum diketahui.',
        'Gaya konstan $\\vec{F}$ menghasilkan torka $\\vec{\\tau} = \\vec{r} \\times \\vec{F}$ dan usaha $W = \\vec{F} \\cdot \\vec{r} = (5a + 4)\\text{ J}$.',
        'Diberikan hasil kali silang $\\vec{r} \\times \\vec{\\tau} = (a - 7)\\hat{i} + (2a + 41)\\hat{j} - 13\\hat{k}$, dan diminta mencari $b - a$ dengan $b = |\\vec{F}|^2$.',
      ],
      pengetahuanAwal: [
        'Sifat perkalian silang: vektor $\\vec{A} \\times \\vec{B}$ selalu tegak lurus terhadap $\\vec{A}$ maupun $\\vec{B}$. Akibatnya, $\\vec{r} \\cdot (\\vec{r} \\times \\vec{\\tau}) = 0$.',
        'Identitas vektor triple product (aturan BAC–CAB): $\\vec{A} \\times (\\vec{B} \\times \\vec{C}) = \\vec{B}(\\vec{A} \\cdot \\vec{C}) - \\vec{C}(\\vec{A} \\cdot \\vec{B})$.',
      ],
      visualisasiFbd: [
        'Secara geometris, vektor $\\vec{\\tau} = \\vec{r} \\times \\vec{F}$ tegak lurus terhadap bidang yang dibentuk oleh $\\vec{r}$ dan $\\vec{F}$.',
        'Maka $\\vec{r} \\times \\vec{\\tau}$ berada kembali di bidang yang sama dengan $\\vec{r}$ dan $\\vec{F}$, serta tepat tegak lurus terhadap $\\vec{r}$.',
      ],
      prinsipHukum: [
        'Definisi Vektor Torka ($\\vec{\\tau} = \\vec{r} \\times \\vec{F}$), Usaha ($W = \\vec{F} \\cdot \\vec{r}$), dan Identitas Triple Cross Product BAC–CAB.',
      ],
      rumusUtama: [
        {
          label: 'Syarat Ketegaklurusan untuk Mencari Konstanta a',
          latex: '\\vec{r} \\cdot (\\vec{r} \\times \\vec{\\tau}) = 0',
          explanation:
            'Karena $\\vec{r} \\times \\vec{\\tau}$ tegak lurus $\\vec{r}$, perkalian titik keduanya pasti bernilai nol.',
          symbols: [
            '$\\vec{r}$: vektor posisi ($\\text{m}$)',
            '$\\vec{\\tau}$: vektor torka ($\\text{N}\\cdot\\text{m}$)',
          ],
          validity: 'Identitas aljabar vektor yang selalu berlaku untuk sembarang vektor di $\\mathbb{R}^3$.',
        },
        {
          label: 'Identitas BAC–CAB untuk Menemukan Vektor Gaya',
          latex: '\\vec{r} \\times \\vec{\\tau} = \\vec{r} \\times (\\vec{r} \\times \\vec{F}) = (\\vec{r} \\cdot \\vec{F})\\vec{r} - (\\vec{r} \\cdot \\vec{r})\\vec{F} = W\\vec{r} - r^2\\vec{F}',
          explanation:
            'Menghubungkan langsung vektor $\\vec{r} \\times \\vec{\\tau}$ dengan usaha $W$ dan gaya $\\vec{F}$.',
          symbols: [
            '$W = \\vec{r} \\cdot \\vec{F}$: usaha ($\\text{J}$)',
            '$r^2 = |\\vec{r}|^2$: kuadrat panjang vektor posisi ($\\text{m}^2$)',
          ],
          validity: 'Berlaku eksak untuk semua vektor $\\vec{r}$ dan $\\vec{F}$.',
        },
      ],
      penurunanPersamaan: [
        'Langkah pertama, gunakan $\\vec{r} \\cdot (\\vec{r} \\times \\vec{\\tau}) = 0$ untuk menentukan $a$: $$2(a - 7) + 1(2a + 41) + a(-13) = 0 \\implies 2a - 14 + 2a + 41 - 13a = 0$$ $$27 - 9a = 0 \\implies a = 3$$',
        'Langkah kedua, susun ulang identitas BAC–CAB untuk memperoleh vektor gaya $\\vec{F}$: $$\\vec{F} = \\frac{W\\vec{r} - (\\vec{r} \\times \\vec{\\tau})}{r^2}$$',
      ],
      langkahPenyelesaian: [
        'Dengan $a = 3$: $\\vec{r} = 2\\hat{i} + \\hat{j} + 3\\hat{k}\\text{ m}$, sehingga $r^2 = 2^2 + 1^2 + 3^2 = 14\\text{ m}^2$.',
        'Hitung $W = 5(3) + 4 = 19\\text{ J}$, dan $\\vec{r} \\times \\vec{\\tau} = -4\\hat{i} + 47\\hat{j} - 13\\hat{k}\\text{ N}\\cdot\\text{m}^2$.',
        'Hitung $W\\vec{r} = 19(2\\hat{i} + \\hat{j} + 3\\hat{k}) = 38\\hat{i} + 19\\hat{j} + 57\\hat{k}$.',
        'Hitung $r^2\\vec{F} = W\\vec{r} - (\\vec{r} \\times \\vec{\\tau}) = (38 - (-4))\\hat{i} + (19 - 47)\\hat{j} + (57 - (-13))\\hat{k} = 42\\hat{i} - 28\\hat{j} + 70\\hat{k}$.',
        'Bagi dengan $r^2 = 14$: $\\vec{F} = 3\\hat{i} - 2\\hat{j} + 5\\hat{k}\\text{ N}$.',
        'Hitung $b = |\\vec{F}|^2 = 3^2 + (-2)^2 + 5^2 = 9 + 4 + 25 = 38$.',
        'Maka $b - a = 38 - 3 = 35{,}0$.',
      ],
      jawabanAkhirCatatan: 'Nilai b - a adalah 35,0.',
      pemeriksaanFisika: [
        'Uji kembali usaha: $W = \\vec{F} \\cdot \\vec{r} = 3(2) + (-2)(1) + 5(3) = 6 - 2 + 15 = 19\\text{ J}$, tepat sama dengan $5a + 4 = 19\\text{ J}$.',
        'Uji kembali $\\vec{\\tau} = \\vec{r} \\times \\vec{F} = (2,1,3) \\times (3,-2,5) = (11, -1, -7)$, dan $\\vec{r} \\times \\vec{\\tau} = (2,1,3) \\times (11,-1,-7) = (-4, 47, -13)$, cocok 100%!',
      ],
    },
    narration: {
      soal: 'Soal nomor 16, topik Dinamika Rotasi. Suatu vektor posisi r sama dengan 2 i ditambah j ditambah a k meter dan suatu gaya konstan F. Vektor torka tau sedemikian sehingga r cross tau sama dengan kurung buka a kurung tutup minus 7 i, ditambah 2 a tambah 41 j, dikurangi 13 k. Besar usaha W sepanjang r adalah 5 a ditambah 4 Joule. Jika kuadrat besar gaya sama dengan b, tentukan nilai b dikurangi a.',
      stimulus:
        'Soal ini berbentuk aljabar vektor tiga dimensi penuh tanpa diagram gambar, menguji hubungan antara vektor posisi, torka, dan usaha.',
      fbd: 'Dalam geometri ruang tiga dimensi, vektor r cross tau selalu tegak lurus terhadap vektor posisi r dan berada pada bidang yang sama dengan r dan F.',
      pengetahuanAwal:
        'Ada dua sifat vektor yang sangat ampuh di sini. Pertama, dot product antara vektor r dengan hasil cross product r cross sesuatu selalu sama dengan nol. Kedua, identitas perkalian silang rangkap tiga B A C minus C A B.',
      prinsip:
        'Kita menggunakan definisi vektor torka r cross F, definisi usaha r dot F, dan identitas vektor triple cross product.',
      rumus:
        'Pertama, r dot kurung buka r cross tau kurung tutup sama dengan nol untuk mencari a. Kedua, r cross tau sama dengan W dikali r dikurangi r kuadrat dikali F.',
      langkah:
        'Dari syarat tegak lurus: 2 kali a minus 7, ditambah 1 kali 2 a tambah 41, dikurangi 13 a sama dengan nol, diperoleh 27 minus 9 a sama dengan nol, sehingga a sama dengan 3. Dengan a sama dengan 3, nilai r kuadrat adalah 2 kuadrat tambah 1 kuadrat tambah 3 kuadrat yaitu 14, dan usaha W adalah 5 kali 3 tambah 4 sama dengan 19 Joule. Substitusi ke rumus gaya: r kuadrat F sama dengan 19 r dikurangi vektor r cross tau, menghasilkan 42 i minus 28 j tambah 70 k. Bagi dengan 14, didapat F sama dengan 3 i minus 2 j tambah 5 k Newton. Kuadrat besarnya b adalah 9 tambah 4 tambah 25 sama dengan 38. Jadi b dikurangi a adalah 38 dikurangi 3 sama dengan 35,0.',
      jawabanAkhir:
        'Jadi, nilai b dikurangi a adalah 35,0.',
    },
  },
  {
    id: 17,
    topic: 'Dinamika Rotasi',
    title: 'Kesetimbangan Papan Penopang Anak',
    questionText:
      'Dua orang menopang seorang anak yang beratnya $220\\text{ N}$ dengan menggunakan sebuah papan seragam yang massanya dapat diabaikan seperti yang terlihat pada gambar. Panjang papan adalah $L$, dengan posisi anak berjarak $\\frac{5L}{8}$ dari ibunya dan $\\frac{3L}{8}$ dari ayahnya. Gaya yang harus diberikan si ayah untuk menahan anak tersebut agar tetap seimbang di atas papan adalah ... $\\text{N}$.',
    promptEnding: 'Gaya dorong ke atas oleh ayah (dalam N):',
    unit: 'N',
    answerValue: 137.5,
    answerFormatted: '137,5',
    tolerance: 0.2,
    hasStimulusDiagram: true,
    stimulusCaption:
      'Ibu (kiri) dan ayah (kanan) menopang papan bermassa diabaikan sepanjang L dengan seorang anak berbobot 220 N berada pada jarak 5L/8 dari ibu dan 3L/8 dari ayah.',
    fbdCaption:
      'Diagram benda bebas papan: gaya ke atas F₁ dari ibu di ujung kiri, berat anak mg = 220 N ke bawah pada x = 5L/8, dan gaya ke atas F₂ dari ayah di ujung kanan.',
    explanation: {
      memahamiPermasalahan: [
        'Seorang anak dengan berat $W = mg = 220\\text{ N}$ berdiri di atas papan ringan (massa papan diabaikan) berpanjang total $L$.',
        'Papan ditopang secara vertikal ke atas di kedua ujungnya oleh Ibu (gaya $F_1$ di ujung kiri) dan Ayah (gaya $F_2$ di ujung kanan).',
        'Posisi anak lebih dekat ke Ayah (berjarak $\\frac{3L}{8}$ dari Ayah dan $\\frac{5L}{8}$ dari Ibu). Kita mencari besar gaya $F_2$ yang diberikan Ayah.',
      ],
      pengetahuanAwal: [
        'Agar sistem papan berada dalam kesetimbangan statis, dua syarat harus terpenuhi: kesetimbangan translasi ($\\Sigma F = 0$) dan kesetimbangan rotasi ($\\Sigma \\tau = 0$ terhadap sembarang poros).',
        'Memilih titik tumpu Ibu sebagai poros sangat strategis karena lengan momen gaya $F_1$ menjadi nol, sehingga $F_1$ langsung hilang dari persamaan torka.',
      ],
      visualisasiFbd: [
        'Tinjau papan sebagai benda tegar horizontal: pada ujung kiri ($x = 0$) bekerja $F_1$ ke atas; pada $x = \\frac{5L}{8}$ bekerja beban $mg = 220\\text{ N}$ ke bawah (menghasilkan torka searah jarum jam terhadap ujung kiri); pada ujung kanan ($x = L$) bekerja $F_2$ ke atas (menghasilkan torka berlawanan jarum jam terhadap ujung kiri).',
      ],
      prinsipHukum: [
        'Syarat Kesetimbangan Benda Tegar (Kesetimbangan Rotasi $\\Sigma \\tau = 0$ dan Translasi $\\Sigma F_y = 0$).',
      ],
      rumusUtama: [
        {
          label: 'Kesetimbangan Torka Terhadap Posisi Ibu',
          latex: '\\Sigma \\tau_{\\text{ibu}} = F_2 L - mg\\left(\\frac{5L}{8}\\right) = 0',
          explanation:
            'Torka berlawanan jarum jam oleh gaya ayah mengimbangi torka searah jarum jam oleh berat anak.',
          symbols: [
            '$F_2$: gaya yang diberikan ayah ($\\text{N}$)',
            '$mg = 220\\text{ N}$: berat anak ($\\text{N}$)',
            '$L$: panjang papan ($\\text{m}$)',
          ],
          validity: 'Berlaku saat papan dalam keadaan seimbang statis dan massa papan diabaikan.',
        },
      ],
      penurunanPersamaan: [
        'Dari $F_2 L = mg \\left(\\frac{5L}{8}\\right)$, panjang papan $L$ saling meniadakan sehingga: $$F_2 = \\frac{5}{8} mg$$',
      ],
      langkahPenyelesaian: [
        'Diketahui: berat anak $mg = 220\\text{ N}$, jarak dari ibu $r_{\\text{anak}} = \\frac{5L}{8}$.',
        'Hitung gaya oleh ayah: $F_2 = \\frac{5}{8} \\times 220 = \\frac{1100}{8} = 137{,}5\\text{ N}$.',
      ],
      jawabanAkhirCatatan: 'Gaya yang harus diberikan si ayah adalah 137,5 N.',
      pemeriksaanFisika: [
        'Karena anak berdiri lebih dekat ke ayah ($3L/8 < 5L/8$), wajar bila ayah menanggung bagian berat lebih besar ($137{,}5\\text{ N} > 110\\text{ N}$).',
        'Gaya oleh ibu adalah $F_1 = 220 - 137{,}5 = 82{,}5\\text{ N}$, dan perbandingan $F_2 : F_1 = 137{,}5 : 82{,}5 = 5 : 3$, tepat kebalikan dari perbandingan jaraknya ($3 : 5$).',
      ],
    },
    narration: {
      soal: 'Soal nomor 17, topik Dinamika Rotasi. Dua orang menopang seorang anak yang beratnya 220 Newton menggunakan papan bermassa diabaikan sepanjang L. Anak berada pada jarak 5 L per 8 dari ibunya dan 3 L per 8 dari ayahnya. Tentukan gaya yang harus diberikan si ayah agar anak tetap seimbang di atas papan.',
      stimulus:
        'Gambar memperlihatkan ibu di ujung kiri memberi gaya ke atas F 1, ayah di ujung kanan memberi gaya ke atas F 2, dan anak berdiri lebih dekat ke sisi ayah.',
      fbd: 'Pada papan bekerja tiga gaya vertikal: F 1 ke atas di kiri, berat anak m g sebesar 220 Newton ke bawah pada posisi 5 L per 8 dari kiri, dan F 2 ke atas di ujung kanan.',
      pengetahuanAwal:
        'Untuk mencari gaya ayah dengan paling cepat, kita gunakan syarat kesetimbangan rotasi dengan memilih tangan ibu sebagai poros putar. Dengan begitu, gaya ibu F 1 tidak menyumbang torka sama sekali.',
      prinsip:
        'Kita menerapkan syarat kesetimbangan rotasi benda tegar yaitu jumlah torsi sama dengan nol.',
      rumus:
        'Jumlah torsi terhadap posisi ibu adalah F 2 dikalikan L dikurangi m g dikalikan 5 L per 8 sama dengan nol, sehingga F 2 sama dengan 5 per 8 dikali m g.',
      langkah:
        'Substitusikan berat anak sebesar 220 Newton. Maka F 2 sama dengan 5 per 8 dikali 220, yaitu 1100 dibagi 8 sama dengan 137,5 Newton.',
      jawabanAkhir:
        'Jadi, gaya yang harus diberikan si ayah adalah 137,5 Newton. Masuk akal karena anak berdiri lebih dekat ke arah ayah sehingga ayah menopang beban lebih besar dibanding ibu yang hanya menopang 82,5 Newton.',
    },
  },
  {
    id: 18,
    topic: 'Dinamika Rotasi',
    title: 'Presesi Giroskop Sistem Roda dan Batang Horizontal',
    questionText:
      'Sebuah roda dengan massa $m_1 = 2\\text{ kg}$ dan momen inersia $I = 8\\text{ kg}\\cdot\\text{m}^2$ (jika diputar terhadap sumbunya) dihubungkan dengan batang yang melalui pusatnya. Batang bermassa $m_2 = 3\\text{ kg}$ dan panjang $\\ell = 1{,}2\\text{ m}$ dapat berputar bebas tanpa gesekan, sedangkan ujung batang lainnya digantung dengan tali. Roda diberikan kelajuan sudut rotasi konstan sebesar $\\omega = 4\\text{ rad/s}$, dan sistem berpresesi sehingga tetap seimbang dengan posisi batang horizontal. Besar kelajuan sudut revolusi (presesi) sistem roda-batang terhadap tali adalah ... $\\text{rad/s}$ (gunakan $g = 9{,}8\\text{ m/s}^2$).',
    promptEnding: 'Kelajuan sudut revolusi/presesi Ω (dalam rad/s):',
    unit: 'rad/s',
    answerValue: 1.3,
    answerFormatted: '1,3',
    tolerance: 0.05,
    hasStimulusDiagram: true,
    stimulusCaption:
      'Batang horizontal (m₂ = 3 kg, panjang ℓ = 1,2 m) digantung pada tali vertikal di ujung kiri dan terhubung ke roda berputar (m₁ = 2 kg, I = 8 kg·m², ω = 4 rad/s) di ujung kanan.',
    fbdCaption:
      'Diagram benda bebas dan vektor momentum sudut sistem roda–batang: torka gravitasi τ terhadap titik ikat tali mengubah arah vektor momentum sudut L = Iω secara horizontal.',
    explanation: {
      memahamiPermasalahan: [
        'Sebuah batang bermassa $m_2 = 3\\text{ kg}$ dan panjang $\\ell = 1{,}2\\text{ m}$ berada dalam posisi mendatar, ujung kirinya ditopang tali vertikal dan ujung kanannya memasang roda bermassa $m_1 = 2\\text{ kg}$ dengan momen inersia $I = 8\\text{ kg}\\cdot\\text{m}^2$.',
        'Roda berputar terhadap sumbu batang dengan kecepatan sudut spin $\\omega = 4\\text{ rad/s}$.',
        'Akibat torka gravitasi dari berat batang maupun berat roda terhadap titik ikat tali, sistem mengalami presesi (revolusi horizontal) mengelilingi sumbu tali vertikal dengan kelajuan sudut $\\Omega$. Kita diminta menghitung $\\Omega$.',
      ],
      pengetahuanAwal: [
        'Momentum sudut spin roda sepanjang sumbu batang horizontal bernilai $L_s = I\\omega$.',
        'Menurut Hukum II Newton untuk gerak rotasi, torka eksternal sama dengan laju perubahan vektor momentum sudut: $\\vec{\\tau} = \\frac{d\\vec{L}}{dt}$.',
        'Ketika sebuah vektor horizontal $\\vec{L}_s$ berputar pada bidang mendatar dengan kecepatan sudut $\\vec{\\Omega}$ vertikal, laju perubahannya adalah $\\frac{d\\vec{L}_s}{dt} = \\vec{\\Omega} \\times \\vec{L}_s$ yang besarnya $\\Omega L_s$.',
      ],
      visualisasiFbd: [
        'Terhadap titik ikat tali sebagai poros: tegangan tali melewati poros ($\tau_T = 0$). Berat batang $m_2 g$ bekerja di titik tengah batang ($r_2 = \\ell/2$), sedangkan berat roda $m_1 g$ bekerja di ujung kanan ($r_1 = \\ell$).',
        'Karena batang tepat mendatar ($\\theta = 90^\\circ$ terhadap vertikal), komponen vertikal momentum sudut akibat revolusi bersifat konstan sehingga tidak berubah terhadap waktu; hanya komponen horizontal $L_s = I\\omega$ yang berputar!',
      ],
      prinsipHukum: [
        'Dinamika Rotasi Lanjut: Hukum II Newton untuk Rotasi ($\\vec{\\tau} = \\frac{d\\vec{L}}{dt}$) pada Gerak Presesi Giroskop.',
      ],
      rumusUtama: [
        {
          label: 'Total Torka Gravitasi Terhadap Titik Gantung',
          latex: '\\tau = m_1 g \\ell + m_2 g \\frac{\\ell}{2} = \\left(m_1 + \\frac{m_2}{2}\\right)g\\ell',
          explanation:
            'Menjumlahkan torka akibat berat roda di ujung batang dan berat batang seragam di pusat massanya.',
          symbols: [
            '$\\tau$: torka gravitasi total ($\\text{N}\\cdot\\text{m}$)',
            '$m_1$: massa roda ($\\text{kg}$)',
            '$m_2$: massa batang ($\\text{kg}$)',
            '$\\ell$: panjang batang ($\\text{m}$)',
          ],
          validity: 'Berlaku saat posisi batang horizontal.',
        },
        {
          label: 'Kecepatan Sudut Presesi (Revolusi)',
          latex: '\\tau = \\Omega L_s = \\Omega I \\omega \\implies \\Omega = \\frac{\\left(m_1 + \\frac{m_2}{2}\\right)g\\ell}{I\\omega}',
          explanation:
            'Persamaan presesi eksak untuk giroskop dengan sumbu spin tepat horizontal ($\\sin 90^\\circ = 1$, $\\cos 90^\\circ = 0$).',
          symbols: [
            '$\\Omega$: kelajuan sudut revolusi/presesi ($\\text{rad/s}$)',
            '$I$: momen inersia roda terhadap sumbunya ($\\text{kg}\\cdot\\text{m}^2$)',
            '$\\omega$: kelajuan sudut rotasi roda ($\\text{rad/s}$)',
          ],
          validity: 'Eksak ketika batang mempertahankan sudut $90^\\circ$ terhadap vertikal.',
        },
      ],
      penurunanPersamaan: [
        'Vektor momentum sudut total memiliki komponen vertikal $L_z = I_{zz}\\Omega$ (konstan) dan komponen horizontal $\\vec{L}_s$ berpanjang tetap $I\\omega$ yang berputar dengan laju $\\Omega$.',
        'Oleh karena itu: $$\\left|\\frac{d\\vec{L}}{dt}\\right| = \\Omega I \\omega = \\tau = \\left(m_1 + \\frac{m_2}{2}\\right)g\\ell$$',
        'Bagi kedua ruas dengan $I\\omega$ untuk memperoleh $\\Omega$.',
      ],
      langkahPenyelesaian: [
        'Diketahui: $m_1 = 2\\text{ kg}$, $m_2 = 3\\text{ kg}$, $\\ell = 1{,}2\\text{ m}$, $I = 8\\text{ kg}\\cdot\\text{m}^2$, $\\omega = 4\\text{ rad/s}$, $g = 9{,}8\\text{ m/s}^2$.',
        'Hitung torka gravitasi: $\\tau = \\left(2 + \\frac{3}{2}\\right) \\times 9{,}8 \\times 1{,}2 = 3{,}5 \\times 9{,}8 \\times 1{,}2 = 41{,}16\\text{ N}\\cdot\\text{m}$.',
        'Hitung momentum sudut spin: $L_s = I\\omega = 8 \\times 4 = 32\\text{ kg}\\cdot\\text{m}^2/\\text{s}$.',
        'Hitung laju presesi: $\\Omega = \\frac{41{,}16}{32} = 1{,}28625\\text{ rad/s}$.',
        'Dibulatkan satu angka di belakang koma menjadi $1{,}3\\text{ rad/s}$.',
      ],
      jawabanAkhirCatatan: 'Besar kelajuan sudut revolusi sistem terhadap tali adalah 1,3 rad/s.',
      pemeriksaanFisika: [
        'Jangan lupa mengikutsertakan berat batang $m_2$ dengan lengan momen $\\ell/2$! Jika lupa berat batang, nilainya akan jauh lebih kecil ($0{,}74\\text{ rad/s}$).',
        'Satuan: $\\frac{\\text{N}\\cdot\\text{m}}{\\text{kg}\\cdot\\text{m}^2/\\text{s}} = \\frac{\\text{kg}\\cdot\\text{m}^2/\\text{s}^2}{\\text{kg}\\cdot\\text{m}^2/\\text{s}} = \\text{s}^{-1} = \\text{rad/s}$, tepat.',
      ],
    },
    narration: {
      soal: 'Soal nomor 18, topik Dinamika Rotasi. Sebuah roda bermassa m 1 sama dengan 2 kilogram dan momen inersia I sama dengan 8 kilogram meter kuadrat dihubungkan dengan batang bermassa m 2 sama dengan 3 kilogram dan panjang L sama dengan 1,2 meter, lalu ujung batang digantung tali. Roda diputar konstan dengan omega sama dengan 4 radian per sekon sehingga sistem seimbang horizontal sambil berevolusi. Dengan g sama dengan 9,8 meter per sekon kuadrat, tentukan kelajuan sudut revolusi sistem terhadap tali.',
      stimulus:
        'Gambar memperlihatkan batang horizontal yang digantung di ujung kiri oleh tali vertikal, sementara roda di ujung kanan berotasi terhadap sumbu batang dan seluruh sistem berputar mengelilingi tali.',
      fbd: 'Gaya gravitasi bekerja di dua tempat: berat batang m 2 g di tengah batang berjarak setengah L dari tali, dan berat roda m 1 g di ujung batang berjarak L dari tali. Keduanya menimbulkan torka horizontal yang membelokkan arah vektor momentum sudut roda.',
      pengetahuanAwal:
        'Pada gerak presesi giroskop, torka gravitasi tidak menjatuhkan batang, melainkan mengubah arah vektor momentum sudut spin L sama dengan I omega sehingga sistem berevolusi secara horizontal dengan kecepatan sudut omega besar.',
      prinsip:
        'Kita menerapkan Hukum kedua Newton untuk rotasi, yaitu torka sama dengan laju perubahan vektor momentum sudut, atau omega besar dikalikan I dikalikan omega kecil.',
      rumus:
        'Torka total tau sama dengan m 1 ditambah setengah m 2, seluruhnya dikalikan g dan L. Kemudian kelajuan sudut revolusi omega besar sama dengan tau dibagi I dikalikan omega kecil.',
      langkah:
        'Hitung torka total terlebih dahulu: massa efektif torsinya 2 ditambah setengah dari 3, yaitu 3,5 kilogram. Kalikan 3,5 dengan 9,8 dan panjang 1,2 meter, diperoleh torka sebesar 41,16 Newton meter. Selanjutnya hitung momentum sudut spin I dikali omega yaitu 8 dikali 4 sama dengan 32. Bagi 41,16 dengan 32, hasilnya 1,286 radian per sekon. Dibulatkan satu desimal menjadi 1,3 radian per sekon.',
      jawabanAkhir:
        'Jadi, kelajuan sudut revolusi sistem adalah 1,3 radian per sekon.',
    },
  },
  {
    id: 19,
    topic: 'Osilasi',
    title: 'Osilasi Dua Pendulum Terhubung Batang Kaku',
    questionText:
      'Dua buah pendulum identik dengan panjang $\\ell$ dan massa masing-masing $m$ (anggap massa titik), dihubungkan oleh tongkat tak bermassa dengan panjang $s$ seperti pada gambar. Sistem dua pendulum ini kemudian diberi gangguan kecil sehingga mengalami osilasi di dekat keadaan setimbangnya. Jika $f(s)$ adalah frekuensi osilasi sistem sebagai fungsi panjang batang $s$, perbandingan panjang $s_0 / \\ell$ sehingga $f(s_0) / f(0) = \\sqrt{3/5}$ adalah ...',
    promptEnding: 'Nilai perbandingan tak berdimensi s₀ / ℓ:',
    unit: '',
    answerValue: 1.6,
    answerFormatted: '1,6',
    tolerance: 0.05,
    hasStimulusDiagram: true,
    stimulusCaption:
      'Dua pendulum identik berpanjang ℓ yang digantung di satu titik poros yang sama, dihubungkan oleh batang kaku tak bermassa sepanjang s membentuk segitiga sama kaki.',
    fbdCaption:
      'Pendulum fisis berbentuk segitiga sama kaki kaku dengan momen inersia I = 2mℓ² dan pusat massa berjarak d_CM = ℓ cos α di bawah poros.',
    explanation: {
      memahamiPermasalahan: [
        'Dua bandul bermassa titik $m$ dan panjang tali $\\ell$ digantung pada satu titik poros yang sama di atasnya.',
        'Kedua massa dihubungkan dengan batang kaku tak bermassa sepanjang $s$, membentuk segitiga sama kaki dengan sisi $\\ell, \\ell, s$.',
        'Karena terhubung batang kaku, seluruh segitiga berosilasi sebagai satu benda tegar (pendulum fisis) di bidang gambar dengan simpangan sudut kecil.',
        'Kita mencari rasio $s_0 / \\ell$ agar frekuensi osilasinya berkurang menjadi $\\sqrt{3/5}$ kali frekuensi saat $s = 0$.',
      ],
      pengetahuanAwal: [
        'Frekuensi osilasi sudut kecil suatu pendulum fisis bermassa total $M_{\\text{tot}}$ adalah $f = \\frac{1}{2\\pi}\\sqrt{\\frac{M_{\\text{tot}}\\,g\\,d_{\\text{PM}}}{I}}$, di mana $I$ adalah momen inersia terhadap poros dan $d_{\\text{PM}}$ adalah jarak pusat massa ke poros.',
        'Ketika $s = 0$, kedua massa berimpit sehingga sistem menjadi bandul matematis biasa dengan $f(0) = \\frac{1}{2\\pi}\\sqrt{\\frac{g}{\\ell}}$.',
      ],
      visualisasiFbd: [
        'Tinjau segitiga sama kaki di posisi setimbang: garis tinggi dari poros membagi sudut puncak menjadi dua sudut $\\alpha$, sehingga $\\sin\\alpha = \\frac{s}{2\\ell}$.',
        'Kedua massa terletak pada ketinggian vertikal yang sama di jarak $d_{\\text{PM}} = \\ell\\cos\\alpha$ di bawah poros, sehingga pusat massa seluruh sistem berada tepat di tengah-tengah batang penghubung pada jarak $\\ell\\cos\\alpha$ dari poros.',
      ],
      prinsipHukum: [
        'Dinamika Osilasi Harmonik Sederhana pada Pendulum Fisis (Benda Tegar).',
      ],
      rumusUtama: [
        {
          label: 'Momen Inersia & Jarak Pusat Massa',
          latex: 'I = 2m\\ell^2, \\qquad d_{\\text{PM}} = \\ell\\cos\\alpha = \\ell\\sqrt{1 - \\left(\\frac{s}{2\\ell}\\right)^2}',
          explanation:
            'Kedua massa titik berjarak tepat $\\ell$ dari poros, sedangkan jarak pusat massanya menyusut oleh faktor $\\cos\\alpha$.',
          symbols: [
            '$I$: momen inersia sistem terhadap poros ($\\text{kg}\\cdot\\text{m}^2$)',
            '$d_{\\text{PM}}$: jarak pusat massa dari poros ($\\text{m}$)',
            '$\\alpha$: setengah sudut puncak segitiga',
          ],
          validity: 'Berlaku selama $0 \\le s < 2\\ell$ dan osilasi berada di bidang segitiga.',
        },
        {
          label: 'Frekuensi Osilasi sebagai Fungsi Panjang Batang',
          latex: 'f(s) = \\frac{1}{2\\pi}\\sqrt{\\frac{(2m) g (\\ell\\cos\\alpha)}{2m\\ell^2}} = f(0)\\sqrt{\\cos\\alpha}',
          explanation:
            'Menunjukkan bahwa frekuensi berbanding lurus dengan akar $\\cos\\alpha$.',
          symbols: ['$f(0) = \\frac{1}{2\\pi}\\sqrt{g/\\ell}$: frekuensi saat $s = 0$ ($\\text{Hz}$)'],
          validity: 'Berlaku untuk osilasi sudut kecil ($\\sin\\theta \\approx \\theta$).',
        },
      ],
      penurunanPersamaan: [
        'Dari $f(s) = f(0)\\sqrt{\\cos\\alpha}$, kuadratkan perbandingan frekuensinya: $$\\cos\\alpha = \\left(\\frac{f(s_0)}{f(0)}\\right)^2$$',
        'Karena $\\sin\\alpha = \\frac{s_0}{2\\ell} = \\sqrt{1 - \\cos^2\\alpha}$, maka: $$\\frac{s_0}{\\ell} = 2\\sqrt{1 - \\cos^2\\alpha}$$',
      ],
      langkahPenyelesaian: [
        'Diketahui: $\\frac{f(s_0)}{f(0)} = \\sqrt{\\frac{3}{5}}$.',
        'Kuadratkan rasio frekuensi: $\\cos\\alpha = \\left(\\sqrt{\\frac{3}{5}}\\right)^2 = \\frac{3}{5} = 0{,}6$.',
        'Hitung $\\sin\\alpha = \\sqrt{1 - 0{,}6^2} = \\sqrt{0{,}64} = 0{,}8$.',
        'Hitung rasio panjang: $\\frac{s_0}{\\ell} = 2\\sin\\alpha = 2 \\times 0{,}8 = 1{,}6$.',
      ],
      jawabanAkhirCatatan: 'Nilai perbandingan s₀ / ℓ adalah 1,6.',
      pemeriksaanFisika: [
        'Syarat geometris segitiga mengharuskan $0 \\le s_0 < 2\\ell \\implies 0 \\le s_0/\\ell < 2$. Nilai $1{,}6$ memenuhi batas fisis ini dengan baik.',
        'Semakin panjang batang $s$, pusat massa naik lebih dekat ke poros sehingga torka pemulih melemah dan frekuensi turun ($f(s_0) < f(0)$), konsisten secara fisis.',
      ],
    },
    narration: {
      soal: 'Soal nomor 19, topik Osilasi. Dua buah pendulum identik dengan panjang L dan massa masing-masing m dihubungkan oleh tongkat tak bermassa dengan panjang s, lalu diberi gangguan kecil agar berosilasi di dekat keadaan setimbangnya. Tentukan perbandingan panjang s nol dibagi L sehingga frekuensi f s nol dibagi f nol sama dengan akar dari 3 per 5.',
      stimulus:
        'Gambar menunjukkan dua tali sepanjang L berawal dari titik poros yang sama di atas, dihubungkan oleh tongkat mendatar sepanjang s membentuk segitiga sama kaki.',
      fbd: 'Karena terhubung tongkat kaku, sistem bergerak sebagai satu pendulum fisis. Momen inersia kedua massa adalah 2 m L kuadrat, dan pusat massanya tepat berada di tengah tongkat pada jarak L kosinus alfa di bawah poros.',
      pengetahuanAwal:
        'Frekuensi osilasi pendulum fisis berbanding lurus dengan akar kuadrat dari massa total dikali g dikali jarak pusat massa, dibagi momen inersia. Saat s sama dengan nol, sistem menjadi bandul sederhana biasa.',
      prinsip:
        'Kita menggunakan prinsip dinamika osilasi harmonik sederhana untuk pendulum fisis benda tegar.',
      rumus:
        'Perbandingan frekuensi f s terhadap f nol sama dengan akar dari kosinus alfa, dengan sinus alfa sama dengan s dibagi 2 L.',
      langkah:
        'Karena perbandingan frekuensi sama dengan akar 3 per 5, maka dengan mengkuadratkan kedua sisi kita peroleh kosinus alfa sama dengan 3 per 5 atau 0,6. Dari identitas Pythagoras, sinus alfa sama dengan akar dari 1 dikurangi 0,36, yaitu 0,8. Karena s nol per L sama dengan 2 kali sinus alfa, hasilnya adalah 2 dikali 0,8 sama dengan 1,6.',
      jawabanAkhir:
        'Jadi, perbandingan panjang s nol terhadap L adalah 1,6. Nilai ini lebih kecil dari dua sehingga bentuk segitiganya valid secara geometri.',
    },
  },
  {
    id: 20,
    topic: 'Osilasi',
    title: 'Gerak Harmonik Pegas Panjang Relaks Nol dan Benda Jatuh',
    questionText:
      'Sistem pada gambar terdiri dari dua buah massa yaitu $m = 2{,}0\\text{ kg}$ dan $M = 2m$ yang dihubungkan oleh sebuah tali tak bermassa. Massa $m$ dihubungkan ke sebuah atap menggunakan pegas dengan konstanta $k$ dan pegas tersebut memiliki panjang relaks nol. Awalnya sistem setimbang dan massa $M$ berada pada ketinggian $h = 1{,}4\\text{ m}$ di atas lantai. Pada suatu saat, tali putus. Jika waktu yang diperlukan $m$ untuk mencapai atap dan waktu yang diperlukan $M$ untuk mencapai lantai adalah sama, konstanta pegas $k$ adalah ... $\\text{N/m}$ (gunakan $g = 9{,}8\\text{ m/s}^2$).',
    promptEnding: 'Konstanta pegas k (dalam N/m):',
    unit: 'N/m',
    answerValue: 30.7,
    answerFormatted: '30,7',
    tolerance: 0.2,
    hasStimulusDiagram: true,
    stimulusCaption:
      'Pegas berpanjang relaks nol menggantung massa m = 2,0 kg dari atap, disambung tali ke massa M = 2m pada ketinggian h = 1,4 m di atas lantai.',
    fbdCaption:
      'Analisis posisi setimbang awal (y₀ = 3mg/k), posisi setimbang baru setelah tali putus (y_eq = mg/k), amplitudo osilasi A = 2mg/k, dan jarak ke atap (y = 0).',
    explanation: {
      memahamiPermasalahan: [
        'Massa $m = 2{,}0\\text{ kg}$ digantung di atap memakai pegas ideal berkonstanta $k$ yang memiliki **panjang relaks nol** (artinya saat tak ada gaya, panjang pegas $0$, sehingga gaya pegas selalu $F = ky$ untuk jarak $y$ di bawah atap).',
        'Di bawah $m$ digantung massa $M = 2m = 4{,}0\\text{ kg}$ dengan seutas tali pada ketinggian $h = 1{,}4\\text{ m}$ di atas lantai.',
        'Ketika tali putus, $M$ jatuh bebas sejauh $h$, sementara $m$ terangkat dan berosilasi harmonik hingga menumbuk atap ($y = 0$). Kedua waktu tempuh ini bernilai sama. Kita mencari konstanta $k$.',
      ],
      pengetahuanAwal: [
        'Pada jatuh bebas dari keadaan diam menempuh tinggi $h$, waktu jatuh memenuhi $h = \\frac{1}{2}gt^2 \\implies t_M = \\sqrt{\\frac{2h}{g}}$.',
        'Panjang relaks nol sangat penting karena atap berada tepat di $y = 0$ (posisi tanpa regangan pegas).',
        'Setelah tali putus, $m$ berosilasi harmonik sederhana dengan frekuensi sudut $\\omega = \\sqrt{\\frac{k}{m}}$ di sekitar titik setimbang barunya.',
      ],
      visualisasiFbd: [
        'Sebelum tali putus: total beban pada pegas adalah $(m + M)g = 3mg$, sehingga jarak awal $m$ di bawah atap adalah $y_0 = \\frac{3mg}{k}$.',
        'Sesudah tali putus: titik setimbang baru bagi $m$ sendirian berada di $y_{\\text{eq}} = \\frac{mg}{k}$ di bawah atap. Dengan demikian, posisi awal $y_0$ berjarak $A = y_0 - y_{\\text{eq}} = \\frac{2mg}{k}$ di bawah titik setimbang baru!',
      ],
      prinsipHukum: [
        'Kesetimbangan Statis Awal, Gerak Jatuh Bebas, dan Persamaan Fase Gerak Harmonik Sederhana (GHS).',
      ],
      rumusUtama: [
        {
          label: 'Waktu Jatuh Bebas Massa M',
          latex: 't_M = \\sqrt{\\frac{2h}{g}}',
          explanation: 'Massa $M$ mulai jatuh dari keadaan diam dari ketinggian $h$.',
          symbols: [
            '$t_M$: waktu $M$ mencapai lantai ($\\text{s}$)',
            '$h$: ketinggian awal $M$ ($\\text{m}$)',
          ],
          validity: 'Berlaku selama hambatan udara diabaikan.',
        },
        {
          label: 'Waktu Massa m Mencapai Atap via GHS',
          latex: 'y(t) - y_{\\text{eq}} = A\\cos(\\omega t), \\qquad t_m = \\frac{2\\pi}{3}\\sqrt{\\frac{m}{k}}',
          explanation:
            'Atap ($y = 0$) berada pada simpangan $-y_{\\text{eq}} = -\\frac{A}{2}$ dari titik setimbang baru, yang dicapai saat fase $\\omega t_m = \\frac{2\\pi}{3}$.',
          symbols: [
            '$A = \\frac{2mg}{k}$: amplitudo osilasi $m$ ($\\text{m}$)',
            '$\\omega = \\sqrt{k/m}$: frekuensi sudut osilasi ($\\text{rad/s}$)',
          ],
          validity: 'Berlaku untuk pegas ideal berpanjang relaks nol sebelum $m$ menumbuk atap.',
        },
      ],
      penurunanPersamaan: [
        'Atur koordinat $y$ mengarah ke bawah dari atap ($y_{\\text{atap}} = 0$). Simpangan dari titik setimbang baru adalah $u(t) = y(t) - y_{\\text{eq}} = A\\cos(\\omega t)$ dengan $A = \\frac{2mg}{k}$ dan $y_{\\text{eq}} = \\frac{mg}{k}$.',
        'Saat $m$ menyentuh atap ($y = 0$), simpangannya adalah $u(t_m) = 0 - y_{\\text{eq}} = -\\frac{mg}{k} = -\\frac{A}{2}$.',
        'Substitusi ke persamaan GHS: $$A\\cos(\\omega t_m) = -\\frac{A}{2} \\implies \\cos(\\omega t_m) = -\\frac{1}{2} \\implies \\omega t_m = \\frac{2\\pi}{3}$$',
        'Samakan $t_m = t_M$: $$\\frac{2\\pi}{3}\\sqrt{\\frac{m}{k}} = \\sqrt{\\frac{2h}{g}} \\implies \\frac{4\\pi^2}{9}\\frac{m}{k} = \\frac{2h}{g} \\implies k = \\frac{2\\pi^2 m g}{9h}$$',
      ],
      langkahPenyelesaian: [
        'Diketahui: $m = 2{,}0\\text{ kg}$, $h = 1{,}4\\text{ m}$, $g = 9{,}8\\text{ m/s}^2$.',
        'Substitusikan ke rumus akhir: $$k = \\frac{2\\pi^2 (2{,}0)(9{,}8)}{9(1{,}4)} = \\frac{39{,}2\\,\\pi^2}{12{,}6} = \\frac{28\\,\\pi^2}{9}$$',
        'Hitung nilai numerik ($\\pi^2 \\approx 9{,}869604$): $$k = \\frac{28 \\times 9{,}869604}{9} = \\frac{276{,}3489}{9} = 30{,}7054...\\text{ N/m}$$',
        'Dibulatkan satu angka di belakang koma menjadi $30{,}7\\text{ N/m}$.',
      ],
      jawabanAkhirCatatan: 'Konstanta pegas k adalah 30,7 N/m.',
      pemeriksaanFisika: [
        'Periksa waktu tempuh secara terpisah: $t_M = \\sqrt{2(1{,}4)/9{,}8} = \\sqrt{0{,}2857} = 0{,}5345\\text{ s}$. Sementara periode osilasi penuh $m$ adalah $T = 2\\pi\\sqrt{2{,}0/30{,}705} = 1{,}6036\\text{ s}$, dan tepat sepertiga periode ($\\frac{2\\pi}{3}$ dari $2\\pi$) adalah $1{,}6036 / 3 = 0{,}5345\\text{ s}$! Cocok sempurna!',
        'Dimensi $\\frac{mg}{h} = \\text{N/m}$, tepat bersatuan konstanta pegas.',
      ],
    },
    narration: {
      soal: 'Soal nomor 20, topik Osilasi. Sistem terdiri atas massa m sama dengan 2,0 kilogram dan M besar sama dengan 2 m yang dihubungkan tali. Massa m terhubung ke atap lewat pegas berkonstanta k dengan panjang relaks nol. Awalnya sistem setimbang dengan M berada 1,4 meter di atas lantai. Saat tali putus, waktu m mencapai atap sama dengan waktu M mencapai lantai. Tentukan konstanta pegas k dengan g sama dengan 9,8 meter per sekon kuadrat.',
      stimulus:
        'Gambar kiri menampilkan posisi awal setimbang dengan pegas teregang menahan m dan M di ketinggian h di atas lantai. Gambar kanan menunjukkan keadaan akhir ketika m mencapai atap dan M menyentuh lantai secara bersamaan.',
      fbd: 'Saat setimbang awal, pegas teregang sejauh y nol sama dengan 3 m g dibagi k. Setelah tali putus, titik setimbang baru bagi massa m adalah m g dibagi k di bawah atap, sehingga amplitudo osilasi m adalah selisihnya yaitu 2 m g dibagi k.',
      pengetahuanAwal:
        'Karena pegas memiliki panjang relaks nol, letak atap tepat berada pada jarak satu kali y setimbang di atas titik setimbang baru, yang berarti simpangannya adalah minus setengah amplitudo. Dari puncak simpangan positif ke minus setengah amplitudo membutuhkan tepat sepertiga periode osilasi.',
      prinsip:
        'Kita menggabungkan gerak jatuh bebas untuk M dan gerak harmonik sederhana dengan analisis fase untuk m.',
      rumus:
        'Waktu jatuh M sama dengan akar 2 h per g. Waktu m mencapai atap adalah dua pi per tiga dikalikan akar m per k. Dengan menyamakan keduanya, diperoleh konstanta pegas k sama dengan 2 pi kuadrat dikali m g dibagi 9 h.',
      langkah:
        'Substitusikan m sama dengan 2,0 kilogram, g sama dengan 9,8, dan h sama dengan 1,4 meter. Pembilangnya adalah 2 dikali pi kuadrat dikali 2 dikali 9,8, dibagi penyebut 9 dikali 1,4 sama dengan 12,6. Sederhanakan menjadi 28 pi kuadrat dibagi 9, menghasilkan 30,705 Newton per meter. Dibulatkan satu desimal menjadi 30,7 Newton per meter.',
      jawabanAkhir:
        'Jadi, konstanta pegas k adalah 30,7 Newton per meter. Kita bisa menguji bahwa kedua waktunya sama-sama bernilai 0,535 detik.',
    },
  },
];
