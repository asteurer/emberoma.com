<script>
    import DefaultLayout from "$lib/components/DefaultLayout.svelte"
    import Information from "$lib/components/Information.svelte";
</script>

<DefaultLayout>
    <Information
        title = "Services we offer"
        description = "
        We accept payment through Venmo and Zelle.
        <br>
        <ul>
            <li>Mixing: <strong>$75/song</strong></li>
            <li>Mastering: <strong>$25/song</strong></li>
            <li>Recording: <strong>$50/hour</strong></li>
            <li>Session Work:
                <ul>
                    <li>Drums: <strong>$100/song</strong></li>
                    <li>Bass: <strong>$100/song</strong></li>
                    <li>Drums and Bass: <strong>$150/song</strong></li>
                </ul>
            </li>
        <ul>
        "
        imageUrl = "/api/images/services.jpg"
        imageAlt = "A person working with music software on a computer"
    />
</DefaultLayout>
