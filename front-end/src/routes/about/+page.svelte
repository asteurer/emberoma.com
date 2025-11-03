<script>
    import DefaultLayout from "$lib/components/DefaultLayout.svelte"
    import Information from "$lib/components/Information.svelte";
    import Profile from "$lib/components/Profile.svelte";
</script>

<DefaultLayout>
    <Information
        title = "About Studio Emberoma"
        description = "
        <strong>Email:</strong> studio@emberoma.com
        <br><strong>Instagram DM:</strong> @studioemberoma
        <br><br>Based in the heart of Austin, Texas, Studio Emberoma is a music studio offering recording, mixing, and
        mastering services. We curate a strong sense of comfort and free expression in studio by offering friendly and
        flexible services.
        "
        imageUrl = "/api/images/about.jpg"
        imageAlt = "Image of the studio"
    />
    <Profile
        name = "Riley Steurer"
        about = "From St. George, Utah, Riley is a powerful drummer of over 13 years. In 2021, Riley set his
        sights on Austin, Texas to truly dedicate himself to the art of drumming and immerse himself in the music scene.
        Since moving to Austin, Riley has played hundreds of shows through a litany of bands, but his most notable
        tenures include the bands Cabronco, Nico Little and the North Americans, and ra!. After spearheading a
        collaborative project album, Salted Caramel - Emberoma, Riley officially partnered up with longtime
        friend/bandmate, Seth Thomas to create Studio Emberoma. Riley is available for recording, mixing, and session
        work (drums)."
        imageUrl = "/api/images/riley_steurer.jpg"
        imageAlt = "Image of Riley Steurer"
    />
    <Profile
        name = "Seth Thomas"
        about = "Born in Dallas, and raised just outside of Austin in Round Rock, Texas, Seth is a bassist of over 10 years.
        Being a musician since 2012 when he picked up the trumpet, it just made sense to make the 20 minute move from
        his hometown to the heart of Austin in 2023. Seth has played in bands throughout the years, but made a mark in
        the band Cabronco’s short career before being recruited by the bands Nico Little and the North Americans and
        ra!. Seth is available for recording, mixing, mastering, and session work."
        imageUrl = "/api/images/seth_thomas.jpg"
        imageAlt = "Image of Seth Thomas"
    />
</DefaultLayout>
