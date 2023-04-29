import React from 'react';
import { Link } from 'react-router-dom';
import './Terms.css'

const Terms = () => {
    return (
<div class="terms-and-conditions">
	<section>
		<h2>Introduction</h2>
		<p>These terms and conditions govern your use of the Dragon News website. By using our website, you accept these terms and conditions in full.</p>
	</section>
	<section>
		<h2>Intellectual Property Rights</h2>
		<p>The content on this website, including articles, images, and videos, is protected by intellectual property rights and is the property of Dragon News.</p>
	</section>
	<section>
		<h2>Disclaimer of Liability</h2>
		<p>We do not guarantee the accuracy, completeness, or timeliness of the content on our website. We shall not be liable for any damages arising from your use of our website.</p>
	</section>
	<section>
		<h2>Indemnity</h2>
		<p>You agree to indemnify us against any losses, damages, costs, and expenses incurred by us in relation to your use of our website or any breach by you of these terms and conditions.</p>
	</section>
	<p>Go back to <a href="/register"> 👉Register</a></p>
    <audio id="song" src="song.mp3" loop></audio>
</div>

    );
};

export default Terms;