import * as Color from './constantColor';
import * as Size from './constantSize';
import * as Brand from './constBrand';

export const optionsSortBy = [{
    label: 'Popularity',
    value: 'Popularity',
}, 
{
    label: 'Name: A-Z',
    value: 'NameAZ',
},
{
    label: 'Price: lowest to highest',
    value: 'Price1',
},
{
    label: 'Price: highest to lowest',
    value: 'Price2',
}];

export const optionsPage = [{
    label: '10',
    value: '10'
}, 
{
    label: '20',
    value: '20'
},
{
    label: '30',
    value: '30'
}];

export const optionsColor = [{
    label: 'Red',
    value: Color.RED
},
{
    label: 'Yellow',
    value: Color.YELLOW  
},
{
    label: 'Blue',
    value: Color.BLUE  
},
{
    label: 'Pale orange',
    value: Color.PALE_ORANGE  
},
{
    label: 'White three',
    value: Color.WHITE_THREE  
},
{
    label: 'Charcoal grey',
    value: Color.CHARCOAL_GREY  
}]

export const optionsSize = [{
    label: Size.S,
    value: Size.S,
},
{
    label: Size.L,
    value: Size.L,
},
{
    label: Size.M,
    value: Size.M,
},
{
    label: Size.XL,
    value: Size.XL,
}]

export const optionsBrand = [{
    label: Brand.Zara,
    value: Brand.Zara
},
{
    label: Brand.Zami,
    value: Brand.Zami
},
{
    label: Brand.Samsung,
    value: Brand.Samsung
},
{
    label: Brand.Nike,
    value: Brand.Nike
},
{
    label: Brand.Adidas,
    value: Brand.Adidas
}]