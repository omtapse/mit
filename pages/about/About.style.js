import styled from "styled-components";

const AboutStyleWrapper = styled.div`
{
  .About-section{
  }
  .About-section .head{
    width:100%;
    display:flex;
    height:60vh;
    align-items:center;
    background: url("/equilbrium.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    justify-content:center;
  } 
  .About-section .head .text{
    font-size:50px;
    color:white;
    margin-top:30px;
  }
  .brocher-image{
    padding:50px;
    display:flex;
    flex-direction:column;
    align-items: center;
  }
  .brocherimg{
    width: 1205px;
    margin:20px;
  }
  #brocherimg1{
    right:0;
  }
  .accordian-item{
    background-color:#283042;
    border-radius:.4rem;
    margin-bottom:1rem;
    padding:1rem;
    box-shadow:.5rem 2px .5rem rgba(0,0,0,.1)
  }
  .accordian-link{
    font-size:1.6rem;
    color: rgba(255,255,255,.8);
    text-decoration:none;
    background-color:#283042;
    width:100%;
    display:flex;
    justify-content:space-between;
    padding:1rem;
  }
  .accordian-link img{
    color:#e7d5ff;
    padding:.5rem;
  }
  .accordian-link .Minus{
    display:none;
  }
  .answer{
    max-height:0;
    overflow :hidden;
    postion:relative;
    background-color:#212838;
    transition:max-height 650ms
  }
  // .answer::before{
  //   content:"";
  //   position: absolute;
  //   width:6rem;
  //   height:90%;
  //   background-color:#8fc460;
  //   top:50%;
  //   left:0;
  //   transform:translateY(-50%);
  // }
  .answer p{
    font-size:1.4rem;
    color:#fff;
    padding:2rem;
  }
  .accordian-item:target .answer{
    max-height:20rem;
  }
}
`;

export default AboutStyleWrapper;
