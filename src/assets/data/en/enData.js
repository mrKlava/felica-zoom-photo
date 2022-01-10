import { aboutImg, serviceWeding, serviceHen, serviceLove, serviceIndividul, reviewOne, reviewTwo, reviewThree, contacts } from '../../images'

// ENGLISH

export const enData = {
    navbar: {
        lang: [
            {
                id: 0,
                short: 'en',
                long: 'English',
                active: true,
            },
            {
                id: 1,
                short: 'fr',
                long: 'Français'
            },
        ],
        logo: 'FelicaZoom',
        link: '#header',
        links: [
            {
                id: 1,
                text: 'about',
                link: '#about',
                offset: { mob: '60', desk: '120' },
            },
            {
                id: 2,
                text: 'services',
                link: '#services',
                offset: { mob: '60', desk: '60' },
            },
            {
                id: 3,
                text: 'reviews',
                link: '#reviews',
                offset: { mob: '200', desk: '200' },
            },
            {
                id: 4,
                text: 'contacts',
                link: '#contacts',
                offset: { mob: '1', desk: '1' },
            },
        ]
    },
    header: {
        id: 1,
        suptitle: 'Special moments',
        title: "Let's save them",
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum quae aliquid dolor quis porro corporis iste delectus, repellat laborum, minima officiis excepturi! Cupiditate officia aut quia commodi laudantium fugiat voluptate!',
    },
    about: {
        id: 1,
        image: aboutImg,
        suptitle: 'About',
        title: 'Felica Zoom',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores, assumenda ea illum nesciunt doloribus eaque? Quod sunt, ut dolores vel deleniti maiores molestiae! Reiciendis voluptatem assumenda sed beatae labore vitae soluta temporibus ex minus. Repellat atque eaque quaerat cupiditate saepe, animi iure provident fugit, praesentium nesciunt voluptate voluptas! Optio necessitatibus, asperiores nulla praesentium exercitationem consequuntur qui quaerat dolore voluptates sed consectetur. Ipsum accusantium, illum expedita totam enim labore numquam, mollitia beatae veniam libero tempore ducimus, accusamus eum harum possimus nisi dolorem odit minus quasi. Corrupti doloribus nostrum obcaecati totam recusandae distinctio reiciendis possimus rerum.',
    },
    services: {
        id: 1,
        suptitle: 'What I offer?',
        title: 'Services',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio excepturi molestiae et ab sit ipsam in quidem quos!',
        service: [
            {
                id: 1,
                image: serviceWeding,
                title: 'Wedding',
                text: {
                    short: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non libero voluptas sequi sunt recusandae dolore, debitis praesentium quis, officiis fugit quasi ipsum officia natus earum dignissimos a nam ab molestias.',
                    long: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, doloribus nobis aliquam totam sed, id labore, quibusdam eveniet expedita tempora quas eum enim. Eaque dolor quam adipisci officia itaque autem ullam tenetur placeat laudantium ex repellendus, blanditiis ad harum esse corporis recusandae nulla fugiat nisi a ipsum praesentium eligendi velit! Expedita laborum assumenda magnam ipsum facilis sint repellat inventore harum fugiat voluptas modi magni pariatur aliquam minima vitae, repellendus voluptatem quasi doloribus? Voluptatem maxime fugit blanditiis, veniam quis dignissimos ea! Repellat totam esse ad voluptate quaerat odit laudantium provident inventore quae hic perspiciatis repellendus, reprehenderit labore, officia voluptatibus. Ab, eum.',
                },
            },
                {
                id: 2,
                image: serviceHen,
                title: 'Hen-Party',
                text: {
                    short: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non libero voluptas sequi sunt recusandae dolore, debitis praesentium quis, officiis fugit quasi ipsum officia natus earum dignissimos a nam ab molestias.',
                    long: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, doloribus nobis aliquam totam sed, id labore, quibusdam eveniet expedita tempora quas eum enim. Eaque dolor quam adipisci officia itaque autem ullam tenetur placeat laudantium ex repellendus, blanditiis ad harum esse corporis recusandae nulla fugiat nisi a ipsum praesentium eligendi velit! Expedita laborum assumenda magnam ipsum facilis sint repellat inventore harum fugiat voluptas modi magni pariatur aliquam minima vitae, repellendus voluptatem quasi doloribus? Voluptatem maxime fugit blanditiis, veniam quis dignissimos ea! Repellat totam esse ad voluptate quaerat odit laudantium provident inventore quae hic perspiciatis repellendus, reprehenderit labore, officia voluptatibus. Ab, eum.',
                },
            },
                {
                id: 3,
                image: serviceLove,
                title: 'Love',
                text: {
                    short: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non libero voluptas sequi sunt recusandae dolore, debitis praesentium quis, officiis fugit quasi ipsum officia natus earum dignissimos a nam ab molestias.',
                    long: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, doloribus nobis aliquam totam sed, id labore, quibusdam eveniet expedita tempora quas eum enim. Eaque dolor quam adipisci officia itaque autem ullam tenetur placeat laudantium ex repellendus, blanditiis ad harum esse corporis recusandae nulla fugiat nisi a ipsum praesentium eligendi velit! Expedita laborum assumenda magnam ipsum facilis sint repellat inventore harum fugiat voluptas modi magni pariatur aliquam minima vitae, repellendus voluptatem quasi doloribus? Voluptatem maxime fugit blanditiis, veniam quis dignissimos ea! Repellat totam esse ad voluptate quaerat odit laudantium provident inventore quae hic perspiciatis repellendus, reprehenderit labore, officia voluptatibus. Ab, eum.',
                },
            },
                {
                id: 4,
                image: serviceIndividul,
                title: 'Individual',
                text: {
                    short: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non libero voluptas sequi sunt recusandae dolore, debitis praesentium quis, officiis fugit quasi ipsum officia natus earum dignissimos a nam ab molestias.',
                    long: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, doloribus nobis aliquam totam sed, id labore, quibusdam eveniet expedita tempora quas eum enim. Eaque dolor quam adipisci officia itaque autem ullam tenetur placeat laudantium ex repellendus, blanditiis ad harum esse corporis recusandae nulla fugiat nisi a ipsum praesentium eligendi velit! Expedita laborum assumenda magnam ipsum facilis sint repellat inventore harum fugiat voluptas modi magni pariatur aliquam minima vitae, repellendus voluptatem quasi doloribus? Voluptatem maxime fugit blanditiis, veniam quis dignissimos ea! Repellat totam esse ad voluptate quaerat odit laudantium provident inventore quae hic perspiciatis repellendus, reprehenderit labore, officia voluptatibus. Ab, eum.',
                },
            },
        ],


    },
    reviews: {
        review: [
            {
                id:1,
                image: reviewOne,
                text: 'Lorem ipsum dolor sitamet, consecteturadipiscing elit, sed doeiusmod tempor incididuntut labore et dolore magnaaliqua. Ut enim ad minimveniam, quis nostrudexercitation!',
                name: 'Clara',
            },
            {
                id:2,
                image: reviewTwo,
                text: 'Rem eaque quibusdam nemo natus aperiam voluptatem nam a earum! Animi quis voluptate aliquam facere maiores, provident, officia laudantium esse vero laboriosam sed tempore.',
                name: 'Bill Clif',
            },
            {
                id:3,
                image: reviewThree,
                text: 'Necessitatibus dolores impedit esse sequi explicabo nulla repellendus maxime est voluptatum blanditiis, dolorem in reprehenderit alias quam. Illo ut sit eveniet! Quod, nihil mollitia illo nisi fugiat placeat at fuga illum delectus quaerat commodi minus ad amet excepturi accusamus!',
                name: 'Sarah M.',
            },
        ]
    },
    contacts: {
        id: 1,
        image: contacts,
        suptitle: 'Feel free to',
        title: 'Contact me',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptatibus molestiae voluptas neque eaque repudiandae dolorum, fuga tenetur vitae rerum corrupti provident aperiam maiores quae! Omnis repudiandae nostrum voluptate at.',
        email: 'felicaphoto@email.com',
        instagram: 'instagram logo',
    },
}
