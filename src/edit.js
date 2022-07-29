
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { RichText } from '@wordpress/block-editor';


import './editor.scss';
 

export default function Edit(props) {
	const { className, attributes, setAttributes } = props;
	const blockProps = useBlockProps();
	return (

		<div className={ className } style={{padding:"20px",marginTop:"10px"}}>
			<RichText 
				tagName='h2'
				placeholder='Give Way Enter The Title'
				value={attributes.title}
				onChange={(value) => setAttributes({ title: value})}
				style={{ color:attributes.titleColor } }
			/>
			<RichText 
				tagName='p'
				placeholder='Description'
				value={props.attributes.description}
				onChange={(value) => setAttributes({ description: value})}
				style={{ color:attributes.descriptionColor } }
			/>
			 
		</div>
		
	);
}
