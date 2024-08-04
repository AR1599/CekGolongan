document.addEventListener('DOMContentLoaded', function() {
    const formContainer = document.getElementById('formContainer');

    function setUpForm() {
        formContainer.innerHTML = `<h3>Masukkan Nama dan Usiamu Dibawah ini</h3>
                                   <form id="cekForm">
                                        <div class="inputContainer">
                                            <input type="text" name="nama" id="namaInput" autocomplete="off" placeholder=" " required>
                                            <label for="namaInput">Nama</label>
                                        </div>
                                        <div class="inputContainer">
                                            <input type="number" name="usia" id="usiaInput" autocomplete="off" placeholder=" " required>
                                            <label for="usiaInput">Usia</label>
                                        </div>
                                        <button type="submit">Cek</button>
                                   </form>
                                   <div id="output"></div>`;
        document.getElementById('cekForm').addEventListener('submit', cekGolongan);
    }

    function cekGolongan(event) {
        event.preventDefault();

        // Array of random texts
        const randomTexts = [
            "Belum Berfungsi",
            "Belum Bisa. Masih Demo :(",
            "Jadi Gini Le",
            "Dingin Tetapi Tidak Kejam",
            "Aku Sigma Mewing Gyatt Rizz",
            "Sabar ya!",
            "Kapal Karam",
            "Roti'o Lempuyangan",
            "Anggrek Mekar Pontianak",
            "Mas Rusdi"
        ];

        // Generate a random index
        const randomIndex = Math.floor(Math.random() * randomTexts.length);

        // Display the random text
        const randomText = randomTexts[randomIndex];

        formContainer.innerHTML = `<p>${randomText}</p>
                                   <button id="cekLagi">Cek Lagi</button>`;

        document.getElementById('cekLagi').addEventListener('click', setUpForm);
    }

    setUpForm();
});
