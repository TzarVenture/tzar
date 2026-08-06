"use client";
import React from 'react';
import smmcard from '@/app/data/smmcard';
import * as GoIcons from "react-icons/go";
import * as RiIcons from "react-icons/ri";
import * as FiIcons from "react-icons/fi";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";

const {
  HeadTitle, title1, subtitle1, title2, subtitle2, title3, subtitle3,
  title4, subtitle4, title5, subtitle5, title6, subtitle6, text2
} = smmcard;

function SocialMediaMarketingGoals() {
  return (
    <>
      <section style={{ padding: '2rem 15px', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px', boxSizing: 'border-box' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h1 style={{ margin: '0 0 10px 0', color: "#1D4224" }}>{HeadTitle}</h1>
            <p style={{ margin: 0 }}>{text2}</p>
          </div>

          <div className="goals-grid-wrapper">
            {/* Card 1 */}
            <div className="goal-card">
              <MdIcons.MdPeople style={{ fontSize: '32px', marginBottom: '10px', color: '#1D4224' }} />
              <h3 style={{ fontSize: '18px', margin: '0 0 8px 0' }}>{title1}</h3>
              <p style={{ margin: 0, fontSize: '14px', color: '#555' }}>{subtitle1}</p>
            </div>
            {/* Card 2 */}
            <div className="goal-card">
              <GoIcons.GoLocation style={{ fontSize: '32px', marginBottom: '10px', color: '#1D4224' }} />
              <h3 style={{ fontSize: '18px', margin: '0 0 8px 0' }}>{title2}</h3>
              <p style={{ margin: 0, fontSize: '14px', color: '#555' }}>{subtitle2}</p>
            </div>
            {/* Card 3 */}
            <div className="goal-card">
              <FaIcons.FaSearchLocation style={{ fontSize: '32px', marginBottom: '10px', color: '#1D4224' }} />
              <h3 style={{ fontSize: '18px', margin: '0 0 8px 0' }}>{title3}</h3>
              <p style={{ margin: 0, fontSize: '14px', color: '#555' }}>{subtitle3}</p>
            </div>
            {/* Card 4 */}
            <div className="goal-card">
              <FiIcons.FiTarget style={{ fontSize: '32px', marginBottom: '10px', color: '#1D4224' }} />
              <h3 style={{ fontSize: '18px', margin: '0 0 8px 0' }}>{title4}</h3>
              <p style={{ margin: 0, fontSize: '14px', color: '#555' }}>{subtitle4}</p>
            </div>
            {/* Card 5 */}
            <div className="goal-card">
              <MdIcons.MdAnalytics style={{ fontSize: '32px', marginBottom: '10px', color: '#1D4224' }} />
              <h3 style={{ fontSize: '18px', margin: '0 0 8px 0' }}>{title5}</h3>
              <p style={{ margin: 0, fontSize: '14px', color: '#555' }}>{subtitle5}</p>
            </div>
            {/* Card 6 */}
            <div className="goal-card">
              <RiIcons.RiLiveFill style={{ fontSize: '32px', marginBottom: '10px', color: '#1D4224' }} />
              <h3 style={{ fontSize: '18px', margin: '0 0 8px 0' }}>{title6}</h3>
              <p style={{ margin: 0, fontSize: '14px', color: '#555' }}>{subtitle6}</p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .goals-grid-wrapper {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        @media (min-width: 768px) {
          .goals-grid-wrapper {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .goals-grid-wrapper {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        .goal-card {
          background: #fff;
          border: 1px solid #003875
;
          border-radius: 8px;
          padding: 20px;
          box-sizing: border-box;
          text-align: center;
        }
        .goal-card h3 {
          margin: 0;
        }
        .goal-card p {
          margin: 0;
        }
      `}</style>
    </>
  );
}

export default SocialMediaMarketingGoals;
