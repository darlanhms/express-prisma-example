import { Router } from 'express';

const booksRouter = Router();

const books = [
    {
        publishers: ['Puffin'],
        number_of_pages: 96,
        isbn_10: ['0140328726'],
        covers: [8739161],
        key: '/books/OL7353617M',
        authors: [
            {
                key: '/authors/OL34184A',
            },
        ],
        ocaid: 'fantasticmrfoxpu00roal',
        contributions: ['Tony Ross (Illustrator)'],
        languages: [
            {
                key: '/languages/eng',
            },
        ],
        classifications: {},
        source_records: [
            'ia:fantasticmrfox00dahl_834',
            'marc:marc_openlibraries_sanfranciscopubliclibrary/sfpl_chq_2018_12_24_run02.mrc:85081404:4525',
        ],
        title: 'Fantastic Mr. Fox',
        identifiers: {
            goodreads: ['1507552'],
            librarything: ['6446'],
        },
        isbn_13: ['9780140328721'],
        local_id: [
            'urn:sfpl:31223064402481',
            'urn:sfpl:31223117624784',
            'urn:sfpl:31223113969183',
            'urn:sfpl:31223117624800',
            'urn:sfpl:31223113969225',
            'urn:sfpl:31223106484539',
            'urn:sfpl:31223117624792',
            'urn:sfpl:31223117624818',
            'urn:sfpl:31223117624768',
            'urn:sfpl:31223117624743',
            'urn:sfpl:31223113969209',
            'urn:sfpl:31223117624750',
            'urn:sfpl:31223117624727',
            'urn:sfpl:31223117624776',
            'urn:sfpl:31223117624719',
            'urn:sfpl:31223117624735',
            'urn:sfpl:31223113969241',
        ],
        publish_date: 'October 1, 1988',
        works: [
            {
                key: '/works/OL45883W',
            },
        ],
        type: {
            key: '/type/edition',
        },
        first_sentence: {
            type: '/type/text',
            value: 'And these two very old people are the father and mother of Mrs. Bucket.',
        },
        latest_revision: 14,
        revision: 14,
        created: {
            type: '/type/datetime',
            value: '2008-04-29T13:35:46.876380',
        },
        last_modified: {
            type: '/type/datetime',
            value: '2021-06-18T22:46:46.648233',
        },
    },
];

booksRouter.get('/', (req, res) => {
    return res.json(books);
});

booksRouter.get('/:id', (req, res) => {
    return res.json(books[0]);
});

export default booksRouter;
