
const Footer = () => {
    const interactLink=["Makeup","Dresses For Girls","T-Shirts","Sandals","Headphones","Babydolls","Blazers For Men","Handbags","Ladies ","Watches","Bags","Sport Shoes","Reebok ","Shoes","Puma","Shoes"," Boxers","Wallets","Tops","Earrings","Fastrack Watches","Kurtis","Nike","Smart Watches","Titan Watches","Designer Blouse","Gowns","Rings","Cricket Shoes","Forever 21","Eye Makeup","Photo Frames","Punjabi Suits","Bikini","Myntra Fashion Show","Lipstick","Saree","Watches","Dresses","Lehenga","Nike Shoes","Goggles","Bras","Suit","Chinos","Shoes","Adidas Shoes","Woodland Shoes"," Jewellery","Designers","Sarees"]
  return (
    <div className="bg-gray-100 flex justify-center">
    <div className="max-w-[1050px]">
        <div className="flex space-x-12 justify-start">
            <div>
                <div>
                    <h1 className="font-bold text-[14px] py-5">ONLINE SHOPPING</h1>
                    <ul className="text-[13px] font-medium text-gray-500 space-y-1">
                        <li><a>Men</a></li>
                        <li><a>Women</a></li>
                        <li><a>Kids</a></li>
                        <li><a>Home & Living</a></li>
                        <li><a>Beauty</a></li>
                        <li><a>Gift Cards</a></li>
                        <li><a>Myntra Insider</a></li>

                    </ul>
                </div>
                <div>
                        <h1 className="font-bold text-[14px] my-5">USEFUL LINKS</h1>
                        <ul className="text-[13px] font-medium text-gray-500 space-y-1">
                            <li><a>Blog</a></li>
                            <li><a>Careers</a></li>
                            <li><a>Site Map</a></li>
                            <li><a>Corporate Information</a></li>
                            <li><a>Whitehat</a></li>
                            <li><a>Cleartrip</a></li>
                        </ul>
                </div>
            </div>
            <div >
                <h1 className="font-bold text-[14px] my-5">CUSTOMER POLICIES</h1>
                <ul className="text-[13px] font-medium text-gray-500 space-y-1">
                    <li><a>Contact Us</a></li>
                    <li><a>FAQ</a></li>
                    <li><a>T&C</a></li>
                    <li><a>Terms Of Use</a></li>
                    <li><a>Track Orders</a></li>
                    <li><a>Shipping</a></li>
                    <li><a>Cancellation</a></li>
                    <li><a>Returns</a></li>
                    <li><a>Privacy policy</a></li>
                    <li><a>Grievance Officer</a></li>
                </ul>
            </div>
            <div>
                <div>
                    <h1 className="font-bold text-[14px] my-5">EXPERIENCE MYNTRA APP ON MOBILE</h1>
                    <div>
                        <a><button>google</button></a>
                        <a><button>App Store</button></a>
                    </div>
                </div>
                <div>
                    <h1 className="font-bold text-[14px] my-5">KEEP IN TOUCH</h1>
                    <div className="text-gray-400 space-x-2 text-[20px]">
                        <a><i className="fa-brands fa-facebook"></i></a>
                        <a><i className="fa-brands fa-twitter"></i></a>
                        <a><i className="fa-brands fa-youtube"></i></a>
                        <a><i className="fa-brands fa-square-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <h1>logo</h1>
                    <div><p>askdasd ansdkad askdak</p></div>
                </div>
                <div>
                    <h1>logo</h1>
                <div><p>askdasd ansdkad askdak</p></div>
            </div>
            </div>
        </div>
        <div>
            <h1 className="font-bold text-[14px] my-5">POPULAR SEARCHES</h1>
            <div  className="text-gray-600 space-x-2 text-[13px]">
                    {interactLink.map((ele,idx)=><div key={idx}><a href="#" key={idx} >{ele}</a> | </div>)}
            </div>
        </div>
        <div className="flex justify-between my-6 text-gray-600">
                <div className="flex">
                    <p>Incase case of concern, </p>
                    <a href="#" className="text-blue-600 font-bold">Contact Us</a>
                </div>
                <div className="flex">
                    <span>&copy;</span>
                    <span>2023</span>
                    <p>www.myntra.com.</p>&nbsp;
                    <p> All rights reserved</p>
                </div>
                <div>
                    <a>A Flipkart company</a>
                </div>
        </div>
                <div></div>
                <div>
                        <h1 className="font-bold text-[14px] my-5">Registered Office Address</h1>
                        <div className="flex justify-between items-end">
                            <p className="max-w-[500px]">
                                Buildings Alyssa,<br/>
                                Begonia and Clover situated in Embassy Tech Village,<br/>
                                Outer Ring Road,<br/>
                                Devarabeesanahalli Village,<br/>
                                Varthur Hobli,<br/>
                                Bengaluru - 560103, India<br/>
                            </p>
                            <div>
                                <span>CIN: U72300KA2007PTC041799</span>
                                <br/>
                                <span>Telephone:<a href="#" className="text-blue-600 font-semibold">+91-80-61561999</a></span>
                            </div>
                        </div>
                </div>
                <div></div>
                <div>
                    <h1 className="font-bold text-[14px] my-5">ONLINE SHOPPING MADE EASY AT MYNTRA</h1>
                    <div className="text-gray-600">
                        <p>If you would like to experience the best of online shopping for men, women and kids in India, you are at the right place. Myntra is the ultimate destination for fashion and lifestyle, being host to a wide array of merchandise including clothing, footwear, accessories, jewellery, personal care products and more. It is time to redefine your style statement with our treasure-trove of trendy items. Our online store brings you the latest in designer products straight out of fashion houses. You can shop online at Myntra from the comfort of your home and get your favourites delivered right to your doorstep.
                        </p>
                    </div>
                </div>
                <div>
                    <h1 className="font-bold text-[14px] my-5">BEST ONLINE SHOPPING SITE IN INDIA FOR FASHION</h1>
                    <div  className="text-gray-600 text-[14px]">
                        <p>
                            Be it clothing, footwear or accessories, Myntra offers you the ideal combination of fashion and functionality for men, women and kids. You will realise that the sky is the limit when it comes to the types of outfits that you can purchase for different occasions.
                        </p>
                        <div>
                            <ol className=" list-decimal ml-10">
                                <li className="mb-2"><strong>Smart men s clothing </strong>- At Myntra you will find myriad options in smart formal shirts and trousers, cool T-shirts and jeans, or kurta and pyjama combinations for men. Wear your attitude with printed T-shirts. Create the back-to-campus vibe with varsity T-shirts and distressed jeans. Be it gingham, buffalo, or window-pane style, checked shirts are unbeatably smart. Team them up with chinos, cuffed jeans or cropped trousers for a smart casual look. Opt for a stylish layered look with biker jackets. Head out in cloudy weather with courage in water-resistant jackets. Browse through our innerwear section to find supportive garments which would keep you confident in any outfit.</li>
                                <li className="mb-2"><strong>Trendy women s clothing</strong> - Online shopping for women at Myntra is a mood-elevating experience. Look hip and stay comfortable with chinos and printed shorts this summer. Look hot on your date dressed in a little black dress, or opt for red dresses for a sassy vibe. Striped dresses and T-shirts represent the classic spirit of nautical fashion. Choose your favourites from among Bardot, off-shoulder, shirt-style, blouson, embroidered and peplum tops, to name a few. Team them up with skinny-fit jeans, skirts or palazzos. Kurtis and jeans make the perfect fusion-wear combination for the cool urbanite. Our grand sarees and lehenga-choli selections are perfect to make an impression at big social events such as weddings. Our salwar-kameez sets, kurtas and Patiala suits make comfortable options for regular wear.</li>
                                <li className="mb-2"><strong>Fashionable footwear </strong>- While clothes maketh the man, the type of footwear you wear reflects your personality. We bring you an exhaustive lineup of options in casual shoes for men, such as sneakers and loafers. Make a power statement at work dressed in brogues and oxfords. Practice for your marathon with running shoes for men and women. Choose shoes for individual games such as tennis, football, basketball, and the like. Or step into the casual style and comfort offered by sandals, sliders, and flip-flops. Explore our lineup of fashionable footwear for ladies, including pumps, heeled boots, wedge-heels, and pencil-heels. Or enjoy the best of comfort and style with embellished and metallic flats.</li>
                                <li className="mb-2"><strong>Stylish accessories </strong>- Myntra is one of the best online shopping sites for classy accessories that perfectly complement your outfits. You can select smart analogue or digital watches and match them up with belts and ties. Pick up spacious bags, backpacks, and wallets to store your essentials in style. Whether you prefer minimal jewellery or grand and sparkling pieces, our online jewellery collection offers you many impressive options.</li>
                                <li className="mb-2"><strong>Fun and frolic</strong> - Online shopping for kids at Myntra is a complete joy. Your little princess is going to love the wide variety of pretty dresses, ballerina shoes, headbands and clips. Delight your son by picking up sports shoes, superhero T-shirts, football jerseys and much more from our online store. Check out our lineup of toys with which you can create memories to cherish.</li>
                                <li className="mb-2"><strong>Beauty begins here </strong>- You can also refresh, rejuvenate and reveal beautiful skin with personal care, beauty and grooming products from Myntra. Our soaps, shower gels, skin care creams, lotions and other ayurvedic products are specially formulated to reduce the effect of aging and offer the ideal cleansing experience. Keep your scalp clean and your hair uber-stylish with shampoos and hair care products. Choose makeup to enhance your natural beauty.</li>
                            </ol>
                        </div>
                        <p>Myntra is one of the best online shopping sites in India which could help transform your living spaces completely. Add colour and personality to your bedrooms with bed linen and curtains. Use smart tableware to impress your guest. Wall decor, clocks, photo frames and artificial plants are sure to breathe life into any corner of your home.</p>
                    </div>
                </div>
    </div>
    </div>
  )
}

export default Footer
