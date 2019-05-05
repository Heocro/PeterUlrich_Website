function applyRandomSponsorLogo() {
	document.getElementById("sponsorLogo").src = "Images/SponsorPool/Sponsor" + (Math.floor(Math.random() * 25) + 1) + ".jpg";
}