import Image from 'next/image'
import React from 'react'
import Marquee from 'react-fast-marquee'

const brandName = [
    {
        brandicon: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/dea104e9-1969-439d-a7e3-4371d6145af7/Untitled+design+%281%29.png"
        , href: "https://www.hollenbeckarchitects.com"
    }, {
        brandicon: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/539c7cd1-7971-45aa-9fde-e6b19f956b1d/1.png"
        , href: "https://www.hennesseyperformance.com"
    }, {
        brandicon: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/8e264c5f-763b-450a-a89d-ff38806f4561/Untitled+design+%2813%29.png"
        , href: "https://tunerschool.com"
    }, {
        brandicon: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/19c4f805-2f49-4d82-9de1-b6b738c70326/4.png"
        , href: "https://thecoatlab.com"
    }, {
        brandicon: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/3e63bc33-5d3b-49f6-9b2b-92c88fcc536e/5.png"
        , href: "http://www.trueformgym.com"
    }, {
        brandicon: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/da9ed087-3b4d-46f1-9d7c-182af197ab5f/6.png"
        , href: "https://www.belleamebridalhouston.com"
    }, {
        brandicon: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/7da9a305-a4c6-438e-964e-552be532a997/3.png"
        , href: "https://www.poiseartistry.com"
    }, {
        brandicon: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/09e6c6b0-c9eb-4293-8e4e-48a8a4b9084e/4.png"
        , href: "https://kairajewelry.com"
    }, {
        brandicon: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/2d524d44-6d33-449d-9f79-ad24ba543224/1.png"
        , href: "https://bulletproof-fitness.com"

    }, {
        brandicon: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/4705bd1c-a48e-4736-8e5e-e14f20618d28/Untitled+design+%282%29.png"
        , href: "https://www.lindawithers.com"
    }, {
        brandicon: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/d4ab6097-4d9c-421f-9224-27eba1c2260d/1.png"
        , href: "https://www.misorabridal.com"
    }, {
        brandicon: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/1001f471-fce8-471c-8858-eeb01ba6bfc4/2.png"
        , href: "https://www.myvioletstagingdesigns.com"

    }, {
        brandicon: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/a29b2773-d943-4aa7-a409-bab600a9dc94/Untitled+design+%285%29.png"
        , href: "https://loveweld.com"
    }, {
        brandicon: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/16636e1c-500a-4ebc-8b9c-266c52cfa833/Untitled+design+%284%29.png"
        , href: "https://culinairecatering.com/index.html"

    }, {
        brandicon: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/2f4caa6b-e77b-405e-b5da-0c3bce0bccbc/Untitled+design+%286%29.png"
        , href: "https://www.celsius.com"

    }, {
        brandicon: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/1f325ff8-cb2f-4c4f-8198-afa680d751cb/Untitled+design+%287%29.png"
        , href: "https://www.evolvelagree.com"
    }, {
        href: "https://cozyearth.com"
        , brandicon: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/fc844b14-5916-4e10-ae86-64dcab4a092c/Untitled+design+%2810%29.png"
    }, {
        href: "https://zavalaimmigration.lawyer"
        , brandicon: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/74f4a16b-7245-496a-9621-85d141620829/1.png"

    }, {
        href: "https://www.partytrick.com"
        , brandicon: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/551ece55-6c6e-4635-9f5e-cf24e7041572/Untitled+design+%2814%29.png"
    }, {
        href: "https://www.bluebirdproductions.com"
        , brandicon: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/1384fe97-fd07-4265-b011-a10a850e5925/2.png"

    }, {
        href: "https://aspenpicniccompany.com"

        , brandicon: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/269a767a-7e4e-4cda-bc3c-5c9fea83c8aa/4.png"
    }, {
        href: "https://www.somethingblue.events"

        , brandicon: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/080ee2ce-da64-40dc-a998-f4a6bf279cf0/5.png"

    }, {
        href: "https://everywine.co"

        , brandicon: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/e1b77b77-a8b2-439e-9bc5-1e473db6f30f/3.png"

    }, {
        href: "https://www.dishsociety.com"

        , brandicon: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/a7e2292f-ea40-4f27-aaa0-7005c3495153/6.png"

    }, {
        href: "https://pepperlougifts.com"

        , brandicon: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/1d8d2e15-b9c5-4804-a49b-9beff0f473dc/7.png"

    }, {
        href: "https://pepperlougifts.com"
        , brandicon: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/0455762e-543c-4d15-ac2a-2586acee6b20/8.png"
    }, {
        href: "https://creativeblinds.com"
        , brandicon: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/51740598-0046-4f79-baf5-607c716fa44e/9.png"
    }, {
        href: "https://roysdigitalmedia.vercel.app/404"

        , brandicon: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/4029cb22-ebd0-4406-a44e-4863ce54984d/10.png"
    }, {
        href: "https://www.armentacollection.com"

        , brandicon: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/282a01e7-b31b-49b9-8870-5e25d9e1386e/13.png"

    }, {
        href: "https://www.reinersjewelry.com"
        , brandicon: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/ae823d70-9473-45d5-a103-e1e6d5068968/12.png"

    }, {
        href: "https://www.lightheartmemorycare.com"
        , brandicon: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/e7614d76-7903-4632-828c-232e0d39f3ed/11.png"

    }, {
        href: "https://www.venturasbridalfashions.com"

        , brandicon: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/b63d37b4-5048-4dda-b8bd-07eab238effc/15.png"

    }, {
        href: "https://www.elementprotectllc.com"

        , brandicon: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/92694f60-ce51-44e1-936a-be71d047ddbd/Untitled+design+%286%29.png"

    }, {
        href: "http://bensondev.com"

        , brandicon: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/6f506b02-abb6-4e44-83c5-e59793ba1e70/Untitled+design+%2811%29.png"

    }, {
        href: "https://montrosetailors.com"
        , brandicon: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/f59d85f6-6db3-44ef-9af8-ea570613cdf1/18.png"


    }, {
        href: "https://memorialtailors.com"

        , brandicon: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/d1e6868a-e640-49e5-868c-1d4a1f2ce5ec/19.png"

    }, {
        href: "https://roysdigitalmedia.vercel.app/404"

        , brandicon: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/a90f8ecb-c592-4935-842c-99da2c2e0898/21.png"

    }, {
        href: "https://thekitchenworks.com"

        , brandicon: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/7ef6e9e8-b174-4978-a109-545c4ec3d994/22.png"

    }, {
        href: "https://its-thermal.com"

        , brandicon: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/4637e30c-2ffd-4183-9eac-a9135104d77c/Untitled+design+%2817%29.png"


    }, {
        href: "https://harvardhomeshou.com"

        , brandicon: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/5b2fd19b-992b-4412-b7ab-182fb5ddfbba/Untitled+design+%2812%29.png"

    }, {
        href: "https://valobrajewelry.com"

        , brandicon: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/be4e3c31-7e03-4b3a-a305-53a6aaddfa92/2.png"

    }, {
        href: "https://getawaysticks.com"
        , brandicon: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/7cd417da-0197-4a33-abe7-1cd9848513e9/3.png"

    }, {
        href: "http://trueexpressionsphotography.com"

        , brandicon: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/51a8101d-f6fe-4366-ad4d-805b296d8a28/4.png"

    }, {
        href: "https://hardemanhome.com"

        , brandicon: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/0858e92d-b9ff-4ecc-99c3-113a2772ebdc/5.png"

    }, {
        href: "https://1836farms.com"
        , brandicon: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/c947aa9a-8b2a-42ab-8a26-acdf28859ae0/6.png"

    }, {
        href: "https://rafaracing.club"
        , brandicon: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/c8b06a0a-d1f4-4e59-93e6-a11a1e0e65a4/7.png"
    }, {
        href: "https://happenhouston.com"
        , brandicon: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/8aef2ca0-5ba0-4758-b986-f0132dbe6f3a/8.png"
    }, {
        href: "https://www.barachurch.com"
        , brandicon: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/01d7a11a-ca97-42d6-88d7-df1ce39355fb/9.png"

    }, {
        href: "https://www.neatbymeg.com"

        , brandicon: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/f8abe8de-95b1-4c45-8d8a-fab5812b94d2/10.png"

    }, {
        href: "https://www.studioahouston.com"
        , brandicon: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/57b20f1a-4481-4abe-b6de-5e77074d2031/11.png"

    }, {
        href: "https://www.vinglace.com"
        , brandicon: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/aa141ccd-2385-4940-b713-b3293acb1c93/13.png"

    }, {
        href: "https://raremen.shop"

        , brandicon: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/17a2b09b-5fab-4ab5-aa2b-ab99d561c41b/14.png"

    }, {
        href: "https://www.katiedavisdesign.com"
        , brandicon: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/73bf2123-29d4-48a1-b442-01118ff8cd2e/15.png"

    }, {
        href: "https://happenhouston.com"

        , brandicon: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/217dc0d6-52e7-406d-bc27-4bb6a13ef690/16.png"

    }, {
        href: "https://shoppuella.com"
        , brandicon: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/0da97f52-eaef-40cd-b025-c3270793d177/17.png"

    }, {
        href: "https://www.idreambridal.com"

        , brandicon: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/1b3d75fb-749d-469f-83ce-defe71315f38/18.png"

    }, {
        href: "https://www.timberwildehomes.com"

        , brandicon: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/6e5067a6-5e7d-4539-8b3f-8c626b65320d/19.png"

    }, {

        href: "https://roysdigitalmedia.vercel.app/404"

        , brandicon: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/a5165128-d657-4f64-ab90-8b01a0f61b7f/21.png"

    }, {
        href: "https://roysdigitalmedia.vercel.app/404"
        , brandicon: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/3fb8ba18-bbf1-41e9-abb2-d8e7dbbe961e/21.png"

    }, {
        href: "https://www.lambinvestments.net"

        , brandicon: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/675bf371-b803-4c1e-96fd-471c01533173/22.png"

    }, {
        href: "https://www.madisonavedesign.com"

        , brandicon: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/07d02091-7d3a-471a-a4e0-1b473c3a71d8/23.png"
    }, {
        href: "https://www.kcwildflowerevents.com"

        , brandicon: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/3b988688-499b-40e3-ba66-0f8408e983e7/24.png"

    }, {
        href: "https://www.kacylaw.com"

        , brandicon: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/559f88bf-a070-44df-adeb-56ed6260cbf5/25.png"

    }, {
        href: "https://www.instagram.com/macwalkerforhisd/?hl=en"

        , brandicon: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/786e63de-5229-470a-9bc5-90c25a5e1853/Untitled+design+%2815%29.png"
    }, {
        href: "https://realequityip.com"

        , brandicon: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/bf0427da-0bf8-49c0-8cd5-659d72530a34/31.png"
    }, {
        href: "https://www.lrhbuild.com"
        , brandicon: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/d7a46d50-f0c7-47d3-911b-e79a84f4b0bb/32.png"

    }, {
        href: "https://www.designdavenport.com"

        , brandicon: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/93db4a80-1ec8-4d53-b072-0f89882f20d0/33.png"
    }, {
        href: "https://five54clothing.com"
        , brandicon: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/a8a4a385-2255-4dbb-b8cd-f9279882b19a/34.png"
    }, {
        href: "https://www.frankeldesignbuild.com"
        , brandicon: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/d46fe6ef-ea65-4c8e-987d-cb58ee1c7907/35.png"

    }, {
        href: "https://www.sprinklerrepairprofessionals.com"

        , brandicon: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/a58b267b-1327-4754-92df-65d5badf7160/36.png"
    }, {
        href: "https://tricoasthomes.com"
        , brandicon: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/851a2731-d208-48ec-971d-d667a6df50bc/37.png"

    }, {
        href: "https://www.instagram.com/twine.society/"
        , brandicon: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/24301aa7-66e1-4e43-92a1-e74ef4b013ad/38.png"
    }, {
        href: "https://www.amybstargel.com"
        , brandicon: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/b337cb10-552a-4d30-bfa4-509a3edc4e5f/40.png"

    }, {
        href: "https://www.proe.consulting"

        , brandicon: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/0a84333e-7e3f-4288-8f3a-46283cf10055/41.png"

    }, {
        href: "https://www.thecrescent.com"
        , brandicon: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/00d32980-60f2-42ec-9d24-ec154941da24/42.png"
    }, {
        href: "https://www.instagram.com/brycemagness_realtor/?hl=en"
        , brandicon: "https://images.squarespace-cdn.com/content/v1/60988ff06fba6224182e5725/ca280a0b-eca9-4e6b-a3e7-c92cfe1dee6a/RDM+website+logos.png"

    }


]
const BrandSection = () => {
    return (
            <div className='bg-slate-200'>
            <Marquee speed={200} >
                {brandName.map((brand, i) => (
                    <div key={i} className='bg-gray-100 rounded-lg  my-10 mr-10 '>
                        <Image src={brand.brandicon} width={400} height={200} alt="brand" className='' />
                    </div>))}
            </Marquee>
            <Marquee speed={200} direction={"right"}>
                {brandName.map((brand, i) => (
                    <div key={i} className='bg-gray-100 rounded-lg  my-10 mr-10 '>
                        <Image src={brand.brandicon} width={400} height={200} alt="brand" className='' />
                    </div>))}
            </Marquee>
               </div>
    )
}

export default BrandSection