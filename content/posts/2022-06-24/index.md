---
title: Sorting Algorithms
date: 2022-06-24T19:00:00-07:00
draft: false
toc: true
description: "Westley talks about sorting baseball cards with Jacob and how computer science can help"
---

---

## The Tech Shelf
### *Where Westley talks about sorting*

This Tuesday, Jacob and I found ourselves with a pile of hundreds of football and baseball cards searching each one on an app to get a rough estimate of their value. We started off by just searching the name of each player one by one but that quickly grew boring and would have taken us months.

Our next workflow was to sort all of them into their individual teams (33 for the NFL and 30 for the MLB) and then look at the most popular in the app and see if we had that player. There we were, trying to give order to a randomized pile of cards.

Let's talk about sorting algorithms.

First of all, why is sorting important? Think about all the times in a day, both in real life and on your computer, information or items need to be sorted. Emails are sorted by date, Google results sorted by relevance, books sorted by the author's last name, baseball cards sorted into teams. A great reason to spend time upfront sorting things is to make it easier to search through later. This is what Google does with their search engine and exactly our goal for the baseball cards. Google grabs all of the websites on the internet (that it is allowed to) and is constantly sorting them so that it can be searched in milliseconds for end users. 

This is one of the fundamental trade-offs in computer science. Is it even worth it to spend time sorting things? If my books on my shelf aren't sorted and are in a random order, it might take me on average 15 seconds to scan through and find the book I am looking for. On the other hand, it might take me an hour to sort my bookshelf but then will take me only 5 seconds to find the book I am looking for. In this case, leaving my shelf unsorted is the best choice because it would take me 360 searches for it to start saving me time. However, if I ran the NYC library it would take me hours to search through thousands of books to find the one I am looking for. At that scale, it makes sense to spend time sorting all of them to save so much time searching later.

When we talk about sorting, size matters. The more there is to sort in one go, the longer it takes. Sorting 100 baseball cards by last name alphabetical order will take longer than sorting 50 twice. For computers, they often need to sort millions of items at once. *How* you sort (aka your sorting algorithm) also matters immensely. Some methods, as we will see, will take hundreds of times longer than more efficient algorithms. Therefore, it is important to pick efficient algorithms to minimize the time and resources spent on sorting.

Let's start with one of the most simple algorithms: **Bubble Sort**. This sorting algorithm is kind of the punching bag of computer science because it is so simple and inefficient. To sort a bookshelf by alphabetical order, I would compare the first and second book. If those two are in alphabetical order, move on to comparing book two and book three. If they aren't in alphabetical order, switch them and compare book two and book three. Repeat this process until there are no more switches and your books are sorted.

This will work everytime but quickly becomes arduous with a lot of books. Bubble sort is what is known as a **quadratic time** algorithm. This means that if the amount of books you need to sort doubles, the amount of time it will take you (on average) will quadruple. If the amount of books triples, the amount of time spent sorting is multiplied by 9.

Let's say it takes me one hour to sort 100 books using this algorithm. If I go to the bookstore and get another 100 books, it would take me 4 hours to sort all of them. Then if I ended up with 1,000 books, it would take me *100 hours* to sort them all. You can see how this wouldn't work very well when the scale gets large.

How else can we sort our books? Let's try taking all of our books of the shelf. Grab one at random and place it on the shelf. Then grab another book and insert it in order on the shelf. Repeat this, inserting books in order one by one. This is what is known as **Insertion Sort.** While it is slightly faster than Bubble sort, it is still in quadratic time so this also quickly becomes too inefficient at large scale.

So quadratic time is bad, is there a sorting algorithm that is faster and doesn't get out of hand as quickly at a large scale? Absolutely! This problem in computer science history is what is called the Quadratic Barrier and wasn't properly solved in a computer until 1945 with the sorting algorithm known as **Mergesort.** The idea is that it is fast to combine two sorted stacks into one larger sorted stack. So the goal is to start by creating sorted stacks of two. Combine those to create sorted stacks of four and repeat until you have one stack completely sorted.

Take the books back of the shelf and create sorted stacks of two books each. Now take two of those stacks and now you only have to compare the top book of each stack! Take the book that starts earliest in the alphabet and start a new stack. Then, again, compare the top book of each stack and add it to the new stack. Repeat this until all of your stacks of two are stacks of four. Repeat this process, combining stacks into larger ones until you have one sorted stack.

Mergesort is one of the best and most practical sorting algorithms. You might have noticed that while you are merging two stacks, the rest are just sitting there. What if you invited a friend over? You both could be merging stacks and half the time it would take just you. Unlike Bubble and Insertion sorting, Mergesort allows for multiple people to be sorting at the same time, reducing the overall time spent sorting. At the large Google scale, this means you can have tens of computers working in tandem to sort all of that information.

Mergesort changed sorting in the computer science world forever. It is fast and scales well. But can we sort even *faster*?

Yes, with an algorithm called **Bucket Sort**. This algorithm first groups things into less granular buckets until each bucket has a manageable number of items. Remember when I said that sorting 50 books twice is faster than sorting 100 once? That is the fundamental idea with Bucket sort. It reduces the size of the shelf you are sorting into many smaller shelves (size matters).

For my bookshelf, one way to do a bucket sort is choosing buckets A-F, G-M, N-S, and T-Z. Then I would go through my random pile of books and drop each one into its correponding bucket. By doing this, I have reduced my one big bookshelf into four smaller ones. Within these bucket, I could do something like an Insertion sort to get a perfect sort. Then I would put each sorted bucket next to one another on the shelf.

The trick is choosing buckets. If you end up with 99% of your items in one bucket, you haven't really done much. To smartly choose buckets, you need to know the distribution of the items you are sorting. Let's say most of my books are written by Malcolm Gladwell, John Green, and Tom Griffiths. Using the even A-F/G-M/N-S/T-Z split doesn't make sense because most of my books will be in bucket two. A better split would be A-F/G/H-Z or even A-F/Gl/Gr/H-Z to make all of the buckets have the same number of items in each. 

If you choose buckets correctly and the number of buckets is small compared to the number of items, Bucket sort ends up being in **linear time**! When the number of books doubles, the time it takes for me to sort them doubles. When it triples, the time it takes triples. This ends up scaling *extremely* well.

So, how should we have sorted all those baseball cards? If the goal was to have a stack of cards sorted by team name and then player's last name to make searching as easy as possible, we would have two sorting operations. Assuming that we have an even distribution of teams (the same amount of player cards in each team), **one way** is to put the cards into buckets A-M and N-Z based on team name then take each of these buckets and do a mergesort on them still based on team name. Then, do a Bubble sort by player last name within each team name (Bubble sort works best in this case because of physical limitations; all the information is on the face of the cards such that we would have to lay them all out on the floor to do an Insertion sort. If we had books with the information on the spine, an Insertion sort would be best).

***References:*** Most of this information came from the great book {{< link "https://algorithmstoliveby.com/" 1 >}}Algorithms to Live By{{< /link >}} by Brian Christian and Tom Griffiths. In it, they write about the application of computer science in everyday life. They talk about so many other incredibly interesting topics like optimal stopping, scheduling, randomness, caching. All of these are computer science problems with solutions that can be applied to everyday life (like sorting baseball cards!).

I have the honor to be Your Obedient Servant,

Westley

---

## What We Like This Week:
- &#x1F4AC; **Video:** {{< link "https://www.youtube.com/watch?v=qPKHna_P9zE" 1 >}}This biologist answering Twitter questions.{{< /link >}} This guy knows all ***sorts*** of things about biology. *-Westley*

- &#x1F4F0; **Article:** {{< link "https://www.history.com/topics/womens-rights/roe-v-wade" 1 >}}History Channel article on <em>Roe v. Wade</em>.{{< /link >}} This is a quick and dirty explainer of the history of the case and abortion more generally in the United States.