import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';
import './style.scss';

import Edit from './edit';
import save from './save';
import metadata from './block.json';

registerBlockType(metadata.name, {

	title: __("GiveWay Block", "aleCad"),
	description: "Firsted Gutenberg Plugin ",
	icon: {
		src: "money",
		background: "#0a2351",
		foreground: "white"
	},
	keywords:[
		__("alecad"),
		__("block"),
		__("Al-amin")
	],
	category: "common",
	supports: {
		html: false,
	},

	attributes: {

		title: {
			type: 'string',
			source: 'html',
			selector: 'h2'
		},
		titleColor: {
			type: 'string',
			default:"#333"
		},

		description: {
			type: 'string',
			source: 'html',
			selector: 'p'
		},

		descriptionColor: {
			type: 'string',
			default:'#333'
		},

		accounts: {

			default: {
				twitter: false,
				tweet: false,
				facebook: false,
				youtube:false
			}
		},
		twitter: {
			default: {
				text: '',
				account: ''
			}
		},
		tweet: {
			default: {
				text: '',
				message:''
			}
			
		},

		youtube: {
			default: {
				text: '',
				url:''
			}
		},

		facebook: {
			default: {
				text: '',
				url:''
			}
		}
		
	},
	edit: Edit,
	save,
} );
