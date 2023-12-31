import Loader from "@/components/common/Loader";
import * as Style from "@/components/templates/Details/index.styled";
import { useFilmRetrieve } from "@/lib/hooks/useFilmRetrieve";
import { useRouter } from "next/router";
import { VscDesktopDownload, VscStarFull } from "react-icons/vsc";
import GenreItem from "./GenreItem/GenreItem";
import StatisticItem from "./StatisticItem/StatisticItem";
import FilledStars from "./FilledStarsItem/FilledStarsItem";
import Torrent from "./TorrentItem";
import { VscChromeClose, VscArrowLeft } from "react-icons/vsc";
import { DeleteCommentButton } from './index.styled';

import { AiTwotoneLike } from "react-icons/ai";

import Link from "next/link";
import { BiTimeFive } from "react-icons/bi";

import React, { useState, useEffect } from 'react';
//localStorage.clear();
const Details = () => {
  const router = useRouter();
  const { filmRetrieve, isLoading } = useFilmRetrieve(
    (router.query.id as string)||""
  );
  interface Comment {
    text: string;
    date: string; // Storing date as string
  }
  const [comments, setComments] = useState<Comment[]>([]);
  const [inputValue, setInputValue] = useState('');
  const filmId = filmRetrieve?.data?.movie?.id;
  const [noCommentsMessage, setNoCommentsMessage] = useState(false);

  useEffect(() => {
    const storedComments = localStorage.getItem('comments');
    if (storedComments) {
      const allComments = JSON.parse(storedComments);
      const filmComments = filmId ? allComments[filmId]||[] : [];

      if (filmComments.length > 0) {
        setNoCommentsMessage(false); // Если у фильма есть комментарии, скрываем сообщение
      } else {
        setNoCommentsMessage(true); // Если у фильма нет комментариев, показываем сообщение
      }

      setComments(filmComments);
    } else {
      setComments([]);
      setNoCommentsMessage(true); // Если у фильма нет комментариев, показываем сообщение
    }
  }, [filmId]);
  


  const addComment = () => {
    if (inputValue.trim() !== '') {
      const filmId = filmRetrieve?.data?.movie?.id;
      if (filmId) {
        const storedComments = localStorage.getItem('comments');
        const allComments = storedComments ? JSON.parse(storedComments) : {};
  
        const filmComments = allComments[filmId]||[];
        if (filmComments.length === 0) {
          setNoCommentsMessage(false); // Если у фильма ранее не было комментариев, скрываем сообщение
        }
        const currentDate = new Date();
        const commentData = { text: inputValue, date: currentDate.toISOString() }; // Создаем объект комментария с текстом и текущей датой
        const newComments = [...filmComments, commentData];
  
        allComments[filmId] = newComments;
  
        localStorage.setItem('comments', JSON.stringify(allComments));
        setComments(newComments);
        setInputValue('');
      }
    }
  };

  const deleteComment = (index: number) => {
    const filmId = filmRetrieve?.data?.movie?.id;
    if (filmId) {
      const storedComments = localStorage.getItem('comments');
      const allComments = storedComments ? JSON.parse(storedComments) : {};
  
      const filmComments = allComments[filmId]||[];
      const newComments = [...filmComments];
  
      newComments.splice(index, 1);

      if (newComments.length === 0) {
        setNoCommentsMessage(true); // Если все комментарии удалены, показываем сообщение
      }
  
      allComments[filmId] = newComments;
  
      localStorage.setItem('comments', JSON.stringify(allComments));
      setComments(newComments);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addComment();
    }
  };

  

  if (isLoading) {
    return <Loader />;
  }

  const genresList = filmRetrieve?.data.movie.genres.map((value) => {
    return <GenreItem key={value} text={value} />;
  });
  const torrentsList = filmRetrieve?.data.movie.torrents.map((item, index) => {
    return (
      <Torrent
        key={index}
        href={item.url}
        quality={item.quality}
        type={item.type}
        size={item.size}
      />
    );
  });

  const youtubeUrl = "https://www.youtube.com/embed/";
  const ytTrailerCode = filmRetrieve?.data.movie.yt_trailer_code;
  const movieRating = filmRetrieve?.data.movie.rating;

  interface UnfilledStarsProps {
    count: number | undefined;
  }  
  const UnfilledStars: React.FC<UnfilledStarsProps> = ({count}) => {
    const filledCount = Math.trunc(count || 10); // Используем Math.trunc для взятия целой части числа
    const stars = Array.from({ length: 10 - filledCount }, (_, index) => (<VscStarFull key={index} />))
    const stars1 = Array.from({ length: 10 - filledCount - 1}, (_, index) => (<VscStarFull key={index} />))
    if ((count || 0) * 10 % 10 >= 5) {
      return (
        <span>{stars1}</span>
      );
    }
    else {
      return (
        <span>{stars}</span>
      );
    }
  }


  return (
    <Style.Details>
      <Style.BackgroundImage
        src={filmRetrieve?.data.movie.background_image_original}
      ></Style.BackgroundImage>
      <Style.Content>
        <Style.ContentTitle>
          <Link href={"/"}> <VscArrowLeft /> Main page</Link>
        </Style.ContentTitle>

        <Style.Data>
          <Style.Image>
            <Style.Img
              src={filmRetrieve?.data.movie.large_cover_image}
            ></Style.Img>

            <Style.MovieInfo>
              <Style.Year>
                {filmRetrieve?.data.movie.year +
                  " " +
                filmRetrieve?.data.movie.language}
              </Style.Year>
              <StatisticItem
                icon={<AiTwotoneLike />}
                text={filmRetrieve?.data.movie.like_count}
              ></StatisticItem>
              <StatisticItem
                icon={<BiTimeFive />}
                text={filmRetrieve?.data.movie.runtime}
              ></StatisticItem>
            </Style.MovieInfo>
            <Style.Genres>{genresList}</Style.Genres>
            <Style.TorrentsTitle>Downloads:</Style.TorrentsTitle>
            <Style.Torrents>{torrentsList}</Style.Torrents>
          </Style.Image>

          <Style.Description>
            <Style.Title>{filmRetrieve?.data.movie.title}</Style.Title>
            
            <Style.Rating>
              <FilledStars count = {filmRetrieve?.data.movie.rating} color = "red" />
              <UnfilledStars count = {filmRetrieve?.data.movie.rating} />
            <Style.NumRating>({filmRetrieve?.data.movie.rating}/10)</Style.NumRating>
            </Style.Rating>

            <Style.DescriptionFull>
              {filmRetrieve?.data.movie.description_full}
            </Style.DescriptionFull>

            {ytTrailerCode && (
              <Style.YouTubeTrailer src={youtubeUrl + ytTrailerCode}>
              </Style.YouTubeTrailer>
            )}
            <Style.Comments>
              <Style.CommentsTitle>Comments:</Style.CommentsTitle>
              {noCommentsMessage ? (<Style.NotComments>No comments yet</Style.NotComments>) : (
                  <Style.CommentsBlock>
                    {comments.map((comment, index) => (
                      <Style.OneComment key={index}>
                        <Style.OneCommentText>{comment.text}</Style.OneCommentText>
                        <Style.OneCommentDate>{new Date(comment.date).toLocaleString()}</Style.OneCommentDate>
                        <Style.DeleteCommentButton onClick={() => deleteComment(index)}>
                          <VscChromeClose />
                        </Style.DeleteCommentButton>
                      </Style.OneComment>
                
                    ))}
                  </Style.CommentsBlock>)}
              <Style.InputComment  
                type="text" 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)} 
                placeholder="Write your comment here"
                onKeyDown={handleKeyDown}>
              </Style.InputComment>
              <Style.Buttons>
                <Style.AddCommentButton onClick={addComment}>
                  Add comment
                </Style.AddCommentButton>
              </Style.Buttons>
            </Style.Comments>
          </Style.Description>
        </Style.Data>
      </Style.Content>
    </Style.Details>
  );
};

export default Details;