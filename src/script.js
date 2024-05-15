const btnModalClose = document.getElementById("btn-modal-close");
const btnModalSkemaGeneralClose = document.getElementById("btn-modal-skema-general-close");
const btnGeneralBanking = document.getElementById("btn-general-banking");
const modalGeneralBanking = document.getElementById("modal-general-banking");
const btnRegistGeneral = document.getElementById("btn-registrasi-general-banking");
const modalSkemaGeneral = document.getElementById("modal-skema-general-banking");

const btnInfrastruktur = document.getElementById("btn-infrastruktur");
const modalInfrastruktur = document.getElementById("modal-infrastruktur");
const btnModalInfrastrukturClose = document.getElementById("btn-modal-infrastruktur-close");
const modalSkemaInfrastruktur = document.getElementById("modal-skema-infrastruktur");
const btnModalSkemaInfrastrukturClose = document.getElementById(
  "btn-modal-skema-infrastruktur-close",
);
const btnRegistInfrastruktur = document.getElementById("btn-registrasi-infrastruktur");

const btnKepatuhan = document.getElementById("btn-kepatuhan");
const modalKepatuhan = document.getElementById("modal-kepatuhan");
const btnModalKepatuhanClose = document.getElementById("btn-modal-kepatuhan-close");
const modalSkemaKepatuhan = document.getElementById("modal-skema-kepatuhan");
const btnModalSkemaKepatuhanClose = document.getElementById("btn-modal-skema-kepatuhan-close");
const btnRegistKepatuhan = document.getElementById("btn-registrasi-kepatuhan");

const btnFeedback = document.getElementById("btn-feedback");
const modalFeedback = document.getElementById("modal-feedback");
const btnModalFeedbackClose = document.getElementById("btn-modal-feedback-close");
const modalSkemaFeedback = document.getElementById("modal-skema-feedback");
const btnModalSkemaFeedbackClose = document.getElementById("btn-modal-skema-feedback-close");
const btnRegistFeedback = document.getElementById("btn-registrasi-feedback");

const btnSoftware = document.getElementById("btn-software");
const modalSoftware = document.getElementById("modal-software");
const btnModalSoftwareClose = document.getElementById("btn-modal-software-close");
const modalSkemaSoftware = document.getElementById("modal-skema-software");
const btnModalSkemaSoftwareClose = document.getElementById("btn-modal-skema-software-close");
const btnRegistSoftware = document.getElementById("btn-registrasi-software");

const btnDokumen = document.getElementById("btn-dokumen");
const modalDokumen = document.getElementById("modal-dokumen");
const btnModalDokumenClose = document.getElementById("btn-modal-dokumen-close");

const btnVerifikasi = document.getElementById("btn-verifikasi");
const modalVerifikasi = document.getElementById("modal-verifikasi");
const btnModalVerifikasiClose = document.getElementById("btn-modal-verifikasi-close");

const btnUji = document.getElementById("btn-uji");
const modalUji = document.getElementById("modal-uji");
const btnModalUjiClose = document.getElementById("btn-modal-uji-close");

const btnKonsultasi = document.getElementById("btn-konsultasi");
const modalKonsultasi = document.getElementById("modal-konsultasi");
const btnModalKonsultasiClose = document.getElementById("btn-modal-konsultasi-close");

const btnPortfolio = document.getElementById("btn-portfolio");
const modalPortfolio = document.getElementById("modal-portfolio");
const btnModalPortfolioClose = document.getElementById("btn-modal-portfolio-close");

const btnPeserta = document.getElementById("btn-peserta");
const modalPeserta = document.getElementById("modal-peserta");
const btnModalPesertaClose = document.getElementById("btn-modal-peserta-close");

const btnKompetensi = document.getElementById("btn-kompetensi");
const modalKompetensi = document.getElementById("modal-kompetensi");
const btnModalKompetensiClose = document.getElementById("btn-modal-kompetensi-close");

const btnId = document.getElementById("btn-id");
const btnEng = document.getElementById("btn-eng");

// Modal General Banking

btnGeneralBanking.addEventListener("click", () => {
  modalGeneralBanking.classList.remove("hidden");
  modalGeneralBanking.classList.add("flex");
});

btnRegistGeneral.addEventListener("click", () => {
  modalGeneralBanking.classList.remove("flex");
  modalGeneralBanking.classList.add("hidden");

  modalSkemaGeneral.classList.remove("hidden");
  modalSkemaGeneral.classList.add("flex");
});

btnModalSkemaGeneralClose.addEventListener("click", () => {
  modalSkemaGeneral.classList.remove("flex");
  modalSkemaGeneral.classList.add("hidden");
});

btnModalClose.addEventListener("click", () => {
  modalGeneralBanking.classList.remove("flex");
  modalGeneralBanking.classList.add("hidden");
});

// Modal Infrastruktur
btnInfrastruktur.addEventListener("click", () => {
  modalInfrastruktur.classList.remove("hidden");
  modalInfrastruktur.classList.add("flex");
});

btnModalInfrastrukturClose.addEventListener("click", () => {
  modalInfrastruktur.classList.remove("flex");
  modalInfrastruktur.classList.add("hidden");
});

btnRegistInfrastruktur.addEventListener("click", () => {
  modalInfrastruktur.classList.remove("flex");
  modalInfrastruktur.classList.add("hidden");

  modalSkemaInfrastruktur.classList.remove("hidden");
  modalSkemaInfrastruktur.classList.add("flex");
});

btnModalSkemaInfrastrukturClose.addEventListener("click", () => {
  modalSkemaInfrastruktur.classList.remove("flex");
  modalSkemaInfrastruktur.classList.add("hidden");
});

// Modal Kepatuhan
btnKepatuhan.addEventListener("click", () => {
  modalKepatuhan.classList.remove("hidden");
  modalKepatuhan.classList.add("flex");
});

btnModalKepatuhanClose.addEventListener("click", () => {
  modalKepatuhan.classList.remove("flex");
  modalKepatuhan.classList.add("hidden");
});

btnRegistKepatuhan.addEventListener("click", () => {
  modalKepatuhan.classList.remove("flex");
  modalKepatuhan.classList.add("hidden");

  modalSkemaKepatuhan.classList.remove("hidden");
  modalSkemaKepatuhan.classList.add("flex");
});

btnModalSkemaKepatuhanClose.addEventListener("click", () => {
  modalSkemaKepatuhan.classList.remove("flex");
  modalSkemaKepatuhan.classList.add("hidden");
});

// Modal Feedback
btnFeedback.addEventListener("click", () => {
  modalFeedback.classList.remove("hidden");
  modalFeedback.classList.add("flex");
});

btnModalFeedbackClose.addEventListener("click", () => {
  modalFeedback.classList.remove("flex");
  modalFeedback.classList.add("hidden");
});

btnRegistFeedback.addEventListener("click", () => {
  modalFeedback.classList.remove("flex");
  modalFeedback.classList.add("hidden");

  modalSkemaFeedback.classList.remove("hidden");
  modalSkemaFeedback.classList.add("flex");
});

btnModalSkemaFeedbackClose.addEventListener("click", () => {
  modalSkemaFeedback.classList.remove("flex");
  modalSkemaFeedback.classList.add("hidden");
});

// Modal Software
btnSoftware.addEventListener("click", () => {
  modalSoftware.classList.remove("hidden");
  modalSoftware.classList.add("flex");
});

btnModalSoftwareClose.addEventListener("click", () => {
  modalSoftware.classList.remove("flex");
  modalSoftware.classList.add("hidden");
});

btnRegistSoftware.addEventListener("click", () => {
  modalSoftware.classList.remove("flex");
  modalSoftware.classList.add("hidden");

  modalSkemaSoftware.classList.remove("hidden");
  modalSkemaSoftware.classList.add("flex");
});

btnModalSkemaSoftwareClose.addEventListener("click", () => {
  modalSkemaSoftware.classList.remove("flex");
  modalSkemaSoftware.classList.add("hidden");
});

// Modal Dokumen
btnDokumen.addEventListener("click", () => {
  modalDokumen.classList.remove("hidden");
  modalDokumen.classList.add("flex");
});

btnModalDokumenClose.addEventListener("click", () => {
  modalDokumen.classList.remove("flex");
  modalDokumen.classList.add("hidden");
});

// Modal Verifikasi
btnVerifikasi.addEventListener("click", () => {
  modalVerifikasi.classList.remove("hidden");
  modalVerifikasi.classList.add("flex");
});

btnModalVerifikasiClose.addEventListener("click", () => {
  modalVerifikasi.classList.remove("flex");
  modalVerifikasi.classList.add("hidden");
});

// Modal Peserta
btnPeserta.addEventListener("click", () => {
  modalPeserta.classList.remove("hidden");
  modalPeserta.classList.add("flex");
});

btnModalPesertaClose.addEventListener("click", () => {
  modalPeserta.classList.remove("flex");
  modalPeserta.classList.add("hidden");
});

// Modal Konsultasi
btnKonsultasi.addEventListener("click", () => {
  modalKonsultasi.classList.remove("hidden");
  modalKonsultasi.classList.add("flex");
});

btnModalKonsultasiClose.addEventListener("click", () => {
  modalKonsultasi.classList.remove("flex");
  modalKonsultasi.classList.add("hidden");
});

// Modal Portfolio
btnPortfolio.addEventListener("click", () => {
  modalPortfolio.classList.remove("hidden");
  modalPortfolio.classList.add("flex");
});
btnModalPortfolioClose.addEventListener("click", () => {
  modalPortfolio.classList.remove("flex");
  modalPortfolio.classList.add("hidden");
});

// Modal Uji
btnUji.addEventListener("click", () => {
  modalUji.classList.remove("hidden");
  modalUji.classList.add("flex");
});
btnModalUjiClose.addEventListener("click", () => {
  modalUji.classList.remove("flex");
  modalUji.classList.add("hidden");
});

// Modal Uji
btnKompetensi.addEventListener("click", () => {
  modalKompetensi.classList.remove("hidden");
  modalKompetensi.classList.add("flex");
});
btnModalKompetensiClose.addEventListener("click", () => {
  modalKompetensi.classList.remove("flex");
  modalKompetensi.classList.add("hidden");
});

// Change Language

btnId.addEventListener("click", () => {
  changeLanguage("id");
  btnEng.classList.remove("text-mandiri-dark");
  btnEng.classList.add("text-slate-400");

  btnId.classList.add("text-mandiri-dark");
  btnId.classList.remove("text-slate-400");
});

btnEng.addEventListener("click", () => {
  changeLanguage("en");

  btnId.classList.remove("text-mandiri-dark");
  btnId.classList.add("text-slate-400");

  btnEng.classList.remove("text-slate-400");
  btnEng.classList.add("text-mandiri-dark");
});

function changeLanguage(lang) {
  document.documentElement.setAttribute("lang", lang);
  // Get all elements with a lang attribute
  const elements = document.querySelectorAll("[lang]");

  // Loop through the elements
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];

    // If the element's lang attribute matches the selected language, show it
    if (element.getAttribute("lang") === lang) {
      element.style.display = "block";
    }
    // Otherwise, hide it
    else {
      element.style.display = "none";
    }
  }
}

changeLanguage("id");
