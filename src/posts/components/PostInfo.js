import React from 'react'

import './PostInfo.css'

import { humanizeNum } from '../../Utils'
import Comments from './Comments'

const PostInfo = ({ comments, favorites, followers, forwards, id, owner, score, visits }) => (
  <div className='post-info'>
    <div className='content'>
      <div className="media">
        <div className="media-left">
          <a href={owner.canonical} target='_blank'>
            <img className="media-object"
              src={owner.avatar.medium}
              alt={owner.nick}
            />
          </a>
        </div>
        <div className="media-body">
          <h4 className="media-heading">{owner.nick}</h4>

          <p>
            {owner.range.sanitizedName}

            <button
              className='btn btn-sm pull-right user-action'
              title='Seguir'
            >
              <i className='fa fa-eye'/>
            </button>

            <button
              className='btn btn-sm pull-right user-action'
              title='Enviar mensaje'
            >
              <i className='fa fa-envelope-o'/>
            </button>
          </p>
        </div>
      </div>
      <hr/>
      <div className='meta'>
        <button
          className='btn btn-link action'
          title='Score'
        >
          <i className='fa fa-rocket'/> {humanizeNum(score)}
        </button>

        <button
          className='btn btn-link action'
          title='Visitas'
        >
          <i className='fa fa-eye'/> {humanizeNum(visits)}
        </button>

        <button
          className='btn btn-link action'
          title='Favoritos'
        >
          <i className='fa fa-heart-o'/> {humanizeNum(favorites)}
        </button>

        <button
          className='btn btn-link action'
          title='Compartido'
        >
          <i className='fa fa-share'/> {humanizeNum(forwards)}
        </button>

        <button
          className='btn btn-link action'
          title='Seguidores'
        >
          <i className='fa fa-users'/> {humanizeNum(followers)}
        </button>
      </div>
      <hr/>
      <Comments id={id} count={comments}/>
    </div>
  </div>
)

export default PostInfo
