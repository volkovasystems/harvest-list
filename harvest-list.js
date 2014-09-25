/*:
	@module-license:
		The MIT License (MIT)

		Copyright (c) 2014 Richeve Siodina Bebedor

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license

	@module-configuration:
		{
			"packageName": "harvest-list",
			"fileName": "harvest-list.js",
			"moduleName": "harvestList",
			"authorName": "Richeve S. Bebedor",
			"authorEMail": "richeve.bebedor@gmail.com",
			"repository": "git@github.com:volkovasystems/harvest-list.git",
			"testCase": "harvest-list-test.js",
		}
	@end-module-configuration

	@module-documentation:
		Pick all elements of the list that passed the harvest function.

		This procedure implies that you can modify the element to be harvested.
		But using this procedure for that purpose is highly disregarded and should be used only for rare cases.

		Harvest function should return non undefined values.
	@end-module-documentation

	@include:
	@end-include
*/
var harvestList = function harvestList( list, harvestFunction ){
	/*:
		@meta-configuration:
			{
				"list:required": "List",
				"harvestFunction:required": "Harvester"
			}
		@end-meta-configuration
	*/

	var harvestedList = [ ];
	var element = null;
	var harvestedElement = null;

	var listLength = list.length;
	for( var index = 0; index < listLength; index++ ){
		element = list[ index ];
		
		harvestedElement = harvestFunction( element );

		if( typeof harvestedElement != "undefined" ){
			harvestedList.push( harvestFunction( element ) );	
		}
	}

	return harvestedList;
};

module.exports = harvestList;