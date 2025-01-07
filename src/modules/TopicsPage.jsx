function TopicsPage(){
    return (
        <>
            <h2>Topics</h2>
            <nav className="local">
                <a href="#webServers">Web Servers</a>
                <a href="#frontendDesign">Frontend Design</a>
                <a href="#optimizingImages">Optimizing Images</a>
                <a href="#favicons">Favicons</a>
                <a href="#cascadingStylesheets">Cascading Stylesheets</a>
            </nav>

            <article id="webServers">
                <h3>Web Servers</h3>

                <p>
                    A dedicated home page is a critical aspect of developing a website.
                    It is reached by typing the <strong>domain</strong> followed by the 
                    <strong> extension</strong> (and optionally the <strong>scheme </strong> 
                    at the beginning), and optionally adding a path to a resource.  The web server
                    is automatically configured to send a <strong>Get Request</strong> for an index.html file (or in some cases,
                    an index.js or index.php file). When you access a home page from a <strong>browser</strong>,
                    it sends an <strong>HTTP request</strong> (through <strong>packets</strong>) to request information 
                    from the website. The domain points to the <strong>IP address</strong> of the web server
                    to which the packet is sent to. The web server then sends back a packet
                    with the requested information (<strong>HTTP response</strong>). This dedicated home page then serves as a
                    navigation point to the rest of the website. Interacting with internal navigation
                    sends additional requests through packets, and responses are received. The home page
                    acts as a graphical interface, allowing the user to request information and receive it.
                    The protocol that the requests and responses are sent through are either 
                    <strong> HTTP</strong> or <strong>HTTPS</strong>. This allows the client to “talk” 
                    with the web server. From there, the web server performs actions with a file server that
                    hosts the <strong>HTML</strong> files and other assets. These are retrieved through the 
                    file protocol and converted to HTTP responses by the web server.
                </p>

                <p>
                    In the Google Chrome Inspector under the network tool, <strong>status codes</strong> and 
                    <strong> HTTP headers</strong> can be viewed. Between viewing the local file and 
                    accessing it through the Oregon State web server, the headers, and status messages differ.
                    Locally, the index.html returns status 200. On the web server, /a1-vetterg/ (which is the path
                    which contains index.html for this page) returns status 200.
                    The Oregon State web server connection has information in the headers about active connects
                    and my connection address (the IP of my computer). I receive more status codes about different
                    assets. It is clear that there is a web server serving me requested files rather than just
                    accessing an HTML file through localhost.
                </p>

                <p>
                    The favicon.ico file has a status of 200 because the web server successfully retrieved
                    the asset and sent it in an <strong>HTTP request</strong>. On the other hand, the 
                    <strong> status code</strong> 404 is given when trying to access main.css and main.js 
                    because those files do not exist, which consequently means the web server failed to retrieve them.
                    This error is known as "Not Found" because the web server failed to find the requested asset.
                </p>

                <p>
                    My current <strong>URL</strong> is "https://web.engr.oregonstate.edu/~vetterg/a1-vetterg/". 
                    The <strong>scheme</strong> is <strong>HTTPS</strong>, which is the protocol my browser
                    is using to access the web server. The <strong>subdomains</strong> "web" and "engr" are 
                    present. This means that the server we are accessing is a subsection of "oregonstate.edu". 
                    The <strong>host domain</strong> is "oregonstate" and the <strong>extension </strong> 
                    is ".edu". The path to the resource is "/~vetterg/a1-vetterg/". This means that we are
                    accessing a subsection of the Oregon State web development server with HTTPS, with the
                    asset being located under the file "~vetterg/a1-vetterg/". There is no fragment because
                    the asset being loaded is the index page, which the web server returns with no further
                    information.
                </p>
            </article>

            <article id="frontendDesign">
                <h3>Frontend Design</h3>

                <p>
                    <strong>Frontend design</strong> is focused on creating a usable and convenient website
                    for users. The main considerations in frontend design are the visual design of the page
                    (<strong>graphical user-interface</strong>) and <strong>usability</strong>. <strong>Frontend 
                    design</strong> is focused on creating an easy experience for users through clear visual design,
                    while also considering a user's natural experience through a website. Color scheme, fonts, 
                    and positioning of media and navigation need to all be considered in creating a memorable, useful 
                    website that has a clear flow. Icons and a unique visual design can improve a website's workflow
                    and will increase a user's ability to remember key features.
                </p>

                <dl>
                    <dt>Effective</dt>
                    <dd><strong>Effectiveness</strong>, in this context, can be described as how accurately work can be done and goals can be completed.</dd>

                    <dt>Efficient</dt>
                    <dd><strong>Efficiency</strong> pertains to how quickly work can be completed.</dd>

                    <dt>Engaging</dt>
                    <dd><strong>Engagement</strong> is how well an interface encourages interaction, and how satisfying the interaction is.</dd>

                    <dt>Easy to Learn</dt>
                    <dd>A website is <strong>easy to learn</strong> if the interface supports easy first, initial visits, and if users remember features in subsequent visits.</dd>

                    <dt>Error-Tolerant</dt>
                    <dd><strong>Error tolerance</strong> is how well a website prevents errors and how well a website helps users recover from errors.</dd>
                </dl>

                <p>
                    The <strong>header element</strong> is the space for a banner that is present on most professional 
                    websites. It usually includes a name or other defining information about the owner of the website.
                    The <strong>nav element</strong> is a navigation block that has links to other parts of a website,
                    or even to external websites. It is typically reused across many pages and can be nested. The <strong>
                    main element</strong> marks the content of a website. This is where all the information related to a 
                    specific page is found. The <strong>section element</strong> is used to group content into organizational
                    units. This is used in conjunction with the <strong>article element</strong>, which is used inside
                    a section, which marks a specific topic under within a section. Finally, the <strong>footer element
                    </strong> is the bottom part of a website where copyright information, contact information, or additional
                    navigation to essential pages lies.
                </p>

                <ol>
                    <li>
                        An external <strong>anchor</strong> contains a <strong>URL</strong> to an external site.
                        When clicked, the user is taken to the page that is linked in the <strong>anchor</strong>.
                    </li>
                    <li>
                        An internal <strong>anchor</strong> links to an item on the same page using an 
                        <strong> ID</strong>. When a tag has an ID, it can be used with a hashtag inside an
                        <strong> anchor</strong> and, when clicked, will take you to the location of that tag.
                    </li>
                    <li>
                        A page-to-page <strong>anchor</strong> links to a different page on a website. This is
                        linked in the <strong>anchor</strong> by using a <strong>relative URL</strong>. A <strong>
                        relative URL</strong> is a <strong>URL</strong> that uses the relative file location of a page 
                        from the location of the page the <strong>anchor</strong> is on.
                    </li>
                </ol>
            </article>
            <article id="optimizingImages">
                <h3>Optimizing Images</h3>

                <p>
                    Images on websites need <strong>descriptive file names</strong> to improve
                    <strong> search engine optimization</strong>. This involves naming the image
                    file to be detailed and descriptive, accurately portraying the contents of
                    the image. Image files also need to have <strong>small file sizes </strong>
                    in order to have load speeds as fast as possible. Website images also require
                    <strong> exact dimensions</strong> to fit the space of a web page. Serving an
                    excessively large image to fit a small area will increase load time.
                    Images also need to have the <strong>correct file format</strong> according
                    to the type of image. Photos can be <strong>JPGs</strong>, transparent
                    graphics need to be <strong>PNGs</strong>, and line art can be <strong>GIFs </strong>.
                    Images also need to have <strong>reduced resolutions</strong> to fit the standard
                    72 pixels-per-inch. This means reducing a higher-quality image to a lower one 
                    is needed in most cases. The <strong>color mode</strong> also needs to fit the
                    file extension. This means the image color mode needs to be either <strong>RGB </strong> 
                    or <strong>indexed</strong>. All of these criteria need to be met for all images,
                    regardless of type. As for which file formats are suitable for each image type,
                    <strong> JPGs</strong> and <strong>WebPs</strong> are used for photographs due to
                    their capacity to hold millions of colors and a lot of detail. They also have
                    the ability to be varying degrees of transparent. For line art, <strong>PNGs</strong>,
                    <strong> SVGs</strong>, and <strong>GIFs</strong> are recommended because of their
                    ability to be compressed and hold details for simpler image types.
                </p>
            </article>
            <article id="favicons">
                <h3>Favicons</h3>

                <p>
                    <strong>Favicons</strong> are used by browsers to provide a branded image
                    so that the user knows what website they are on. Files of the <strong>favicon </strong> 
                    are saved under many types, like .ico or .png. The browser takes the <strong>
                    favicon</strong> file that is best suited for the type of browser and device and
                    serves it to the user, usually on the left side of the browser tab. When a website is 
                    favorited, the browser saves the icon in a favorites bar or list. Devices like 
                    android phones can save website shortcuts to a home screen and the icon will be the
                    <strong> favicon</strong> of the website along with the browser used to open the page.
                    However, support for this feature varies heavily depending on which device or browser 
                    is being used.
                </p>
            </article>
            <article id="cascadingStylesheets">
                <h3>Cascading Stylesheets</h3>
                
                 <p>
                    <strong>Stylesheets</strong> are necessary to incorporate into websites because
                    they provide a streamlined way to apply styles to many <strong>HTML</strong>
                    files. This is called applying styles <strong>globally</strong>. <strong>Stylesheets </strong> 
                    also provide a singular location to edit styles, greatly increasing efficiency over a method
                    such as applying styles <strong>inline</strong>. <strong>Stylesheets</strong> also provide
                    support for <strong>variables</strong>, also increasing efficiency by defining common colors
                    into easy-to-use variables.
                 </p>

                  <p>
                    The most common way to incorporate <strong>CSS</strong> styles into a website is by linking
                    an <strong>external CSS</strong> file. The two ways this is done is by linking a <strong>stylesheet </strong> 
                    in the <strong>head</strong> of an <strong>HTML</strong> file. This is the most efficient method as it
                    imports a <strong>global stylesheet</strong>. The other way to incorporate styles in to <strong>
                    import</strong> a different <strong>CSS</strong> into a <strong>global CSS</strong> file. Another two
                    ways is to define styles within the <strong>HTML</strong> document, either <strong>embedding CSS </strong> 
                    using the style tag or defining <strong>CSS inline</strong> (within an <strong>HTML tag</strong>). These
                    methods are used to make small changes, but is not recommended as it is hard to locate and therefore change.
                    The final method is to change the style using <strong>JavaScript</strong>. This method is also inefficient,
                    as if a style needs to be changed, it is much easier to change it and keep track of it within an <strong>external
                    CSS</strong> file.
                  </p>
            </article>
        </>
    );
}
export default TopicsPage;