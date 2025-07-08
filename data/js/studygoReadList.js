async function studygoReadList(listid) {
    console.log(listid)
    let respon = await fetch('https://proxy.corsfix.com/?https://api.wrts.nl/api/v3/public/lists/' + listid, {method: 'GET'});
    if (!respon.ok) {
        throw new Error(`HTTP error! status: ${respon.status}`);
    }
    let data = await respon.json();
    let creatorjson = null;
    const creator = data.creator;
    if (creator && creator.name && creator.profile_image_url) {
        creatorjson = {
            "name": creator.name,
            "image": creator.profile_image_url
        };
    }
    // TODO: maak de words json actueel normaal
    return {
        "title": data.title,
        "description": data.description,
        "creator": creatorjson,
        "subject": {
            "Subjects": data.subjects.map(subject => ({
                "name": subject.name,
            })),
            "subject": data.subject,
        },
        "words": data.words_with_performance.map(word => ({
            "word": word.words.map((word) => ({"word": word})),
        })),
    };
}