<svelte:head>
	<title>FormValidation • v0.3.3</title>
</svelte:head>

<ChangelogLayout>
    <h1 class="f3 f2-m f1-l tc">Version 0.3.3</h1>
    <h2 class="f4 fw4 tc">Released 27 March 2014</h2>

    <section class="mv5">
        <Heading>Improvements</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>Don't validate disabled element</li>
            <li>Handle case where a field is removed after the bootstrap validation</li>
        </ul>
    </section>

    <section class="mv5">
        <Heading>Bug fixes</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>Cannot call <code>form.submit()</code> inside <code>submitHandler</code></li>
            <li>The <a href="/guide/validators/not-empty" class="blue dim link">notEmpty validator</a> doesn't work on file input</li>
        </ul>
    </section>
</ChangelogLayout>

<script>
import ChangelogLayout from '../../../components/ChangelogLayout.svelte';
import Heading from '../../../components/Heading.svelte';
</script>