<Fragment>
	<div>
		value = {products[0].material} <br />
		{console.log(products)}
		{/* {displayImg()} */}
		<button onClick={displayImg}> Display Img </button>
		{/* <img src="https://samrat.online/images/pic.gif" /> */}
		{/* <img src="http://adijha.com/profile.jpg" /> */}
		<button onClick={() => dispatch({ type: 'material', value: 'Canvas' })}> Material </button>
		<button onClick={() => dispatch({ type: 'images', value: 'http://adijha.com/profile.jpg' })}> Image </button>
		<button onClick={() => dispatch({ type: 'images-push', value: 'http://adijha.com/profile.jpg' })}>
			{' '}
			push images{' '}
		</button>
	</div>
</Fragment>;
