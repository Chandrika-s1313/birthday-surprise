import React, { useState } from "react";
import "./BirthdayBook.css";

const chapters = [
    {
        title: "Chapter 1: Strength",
        content: `On this beautiful day, I want to celebrate not just your birthday, but everything you are.
You are strong, patient, and full of love. Believe in yourself, because your hard work will always pay off.
Life’s struggles are temporary — days change, seasons shift, and everything will fall into place.
I know you’ll achieve everything you want and the dreams you deserve, and I’ll be right here, cheering for you every step of the way. 🫂❤️

Even when life tested us, you never gave up. You carried yourself with dignity and courage, even when the world felt heavy.
That’s the strength I admire in you — the ability to rise above challenges and keep moving forward.
Your patience teaches me to slow down, your resilience inspires me to keep trying, and your love reminds me that nothing is impossible when we stand together.`
    },
    {
        title: "Chapter 2: Memories",
        content: `Our journey together has been unlike anyone else’s. We’ve faced distance, misunderstandings, and countless challenges,
yet we always found our way back to each other. Every silly fight, every jealous moment, every tear — they all came from one simple truth:
I just wanted more time with you. And through it all, you’ve been my strength, my safe place, my happiness. 🩵

From Hyderabad evenings to metro rides, from temple visits to shopping trips — every memory is stitched into my heart.
Even the haircut you gave me, the laughter we shared, the food we enjoyed — they are all chapters in our story.
I remember the way your smile lit up at the metro when you saw me, the way your hand felt when we walked together, and the way you made even ordinary days feel extraordinary.
These memories are treasures I’ll carry forever, and today we add another one: your birthday, celebrated with love and joy.`
    },
    {
        title: "Chapter 3: Dreams",
        content: `May this birthday bring you joy, laughter, and the promise of all our dreams coming true — together.
Let’s keep building memories, fulfilling little wishes, and chasing big dreams side by side.
Whether it’s simple evenings together, long trips we’ve always imagined, or just sharing food and laughter,
every moment with you is precious.

I dream of us traveling to new places, discovering hidden streets, and tasting biryani at every where we go.
I dream of quiet nights where we talk about life, of mornings where we wake up to each other’s smiles,
and of milestones we’ll celebrate hand in hand. Every dream feels brighter because it’s with you,
and every plan feels possible because we’ll face it together.`
    },
    {
        title: "Chapter 4: Forever",
        content: `You are patient, kind, and genuine — my safe place and my joy.
You get more excited about my happiness than I do — that’s a rare gift.

So today, I celebrate you. Your smile, your kindness, your love, and the way you make my world brighter.
Happiest Birthday, my dearest. May this year be full of blessings, success, and endless love.
And remember — no matter what happens, I will always love you the same. 🤍❤️

Forever isn’t just a word to me — it’s a promise. A promise that I’ll stand by you in every season,
that I’ll hold your hand through every storm, and that I’ll never stop choosing you.
You are my forever, my safe place, and my greatest blessing.`
    },
    {
        title: "Chapter 5: Promises",
        content: `I promise to stand by you in every season of life — in joy and in struggle.
I promise to listen, to care, and to never let go of the bond we share.
On your birthday, I renew every promise I’ve ever made to you: to love you endlessly,
to support your dreams, and to make every day brighter with my presence.

I promise to laugh with you in happy times, to comfort you in sad ones,
to celebrate your victories, and to lift you up when you stumble.
My promises aren’t just words — they are the foundation of the life I want to build with you.`
    },
    {
        title: "Chapter 6: Laughter",
        content: `Do you remember the silly jokes, the playful fights, the endless teasing?
Those moments of laughter are treasures I hold close. Your smile is my favorite gift,
and your laughter is the music that makes my world dance. 🎉

I love the way you laugh at my silly mistakes, the way you tease me when I’m moody,
and the way you turn even ordinary days into joyful days.
On this birthday, I wish you countless reasons to laugh, because your happiness is my happiness,
and your laughter is the sound I want to hear forever.`
    },
    {
        title: "Chapter 7: Gratitude",
        content: `Thank you for being you — for your patience, your kindness, your love.
Thank you for every sacrifice, every effort, every moment you’ve given me.
On your birthday, I want you to know how deeply grateful I am for your presence in my life.
You are my blessing, my miracle, and my forever.

I am grateful for the way you understand me when I don’t even speak,
for the way you care when I’m not feeling good, and for the way you respect me in every situation.
Your love is a gift I’ll never take for granted, and my gratitude for you grows every single day.`
    },
    {
        title: "Chapter 8: Our Future",
        content: `I dream of the days ahead — the trips we’ll take, the gifts we’ll exchange,
    the quiet evenings we’ll spend together, and the milestones we’ll celebrate.
    Our future is a canvas, and together we’ll paint it with joy, adventure, and love.
    Happy Birthday, my love — here’s to all the chapters yet to come. 🥳

    I see us building a home filled with laughter, creating traditions that are ours alone,
    and writing a story that no one else can copy. The future is uncertain, but with you,
    it feels safe, exciting, and full of promise. I can’t wait to live every tomorrow with you.`
    }
];

const BirthdayBook = ({ onReplay }) => {
    const [opened, setOpened] = useState(false);
    const [pageIndex, setPageIndex] = useState(0);
    const [isFlipping, setIsFlipping] = useState(false);
    const [flipDir, setFlipDir] = useState("");

    const triggerFlip = (direction, newIndex) => {
        if (isFlipping) return;
        setFlipDir(direction);
        setIsFlipping(true);

        setTimeout(() => setPageIndex(newIndex), 400);
        setTimeout(() => {
            setIsFlipping(false);
            setFlipDir("");
        }, 800);
    };

    const nextPage = () => {
        if (pageIndex < chapters.length - 1) {
            triggerFlip("flip-forward", pageIndex + 1);
        }
    };

    const prevPage = () => {
        if (pageIndex > 0) {
            triggerFlip("flip-backward", pageIndex - 1);
        }
    };

    return (
        <div className="book-background">
            <div className="book-frame">
                {!opened ? (
                    <div className="book-cover">
                        <h2 className="message-title">A Special Message</h2>
                        <img
                            src="/bubu-dudu-sseeyall.gif"
                            alt="Birthday animation"
                            className="cover-gif"
                        />
                        <button className="tap-btn" onClick={() => setOpened(true)}>
                            Tap to Open
                        </button>
                    </div>
                ) : (
                    <div className={`book-page ${isFlipping ? flipDir : ""}`}>
                        <h2 className="chapter-title">{chapters[pageIndex].title}</h2>
                        <div className="chapter-content">{chapters[pageIndex].content}</div>
                        <div className="nav-buttons">
                            <button onClick={prevPage} disabled={pageIndex === 0 || isFlipping}>
                                ← Previous
                            </button>
                            <button
                                onClick={nextPage}
                                disabled={pageIndex === chapters.length - 1 || isFlipping}
                            >
                                Next →
                            </button>
                            <button className="back-btn" onClick={() => setOpened(false)}>
                                Back to Cover
                            </button>
                        </div>
                    </div>
                )}
            </div>
            {/* Floating Replay Button in corner */}
            {/* Replay button OUTSIDE the book layout */}
            {pageIndex === chapters.length - 1 && (
                <div className="replay-container">
                    <button className="replay-btn" onClick={onReplay}>
                        🔄 Replay
                    </button>
                    <img src="/sparkle.gif" alt="Replay Gif" className="replay-gif" />
                </div>
            )}

        </div>
    );
};

export default BirthdayBook;
