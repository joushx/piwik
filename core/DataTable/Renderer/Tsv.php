<?php
/**
 * Piwik - Open source web analytics
 * 
 * @link http://piwik.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 * 
 * @category Piwik
 * @package Piwik
 */

/**
 * TSV export
 * 
 * Excel doesn't import CSV properly, it expects TAB separated values by default.
 * TSV is therefore the 'CSV' that is Excel compatible
 * 
 * @package Piwik
 * @subpackage Piwik_DataTable
 */
class Piwik_DataTable_Renderer_Tsv extends Piwik_DataTable_Renderer_Csv
{
	/**
	 * Constructor
	 */
	function __construct()
	{
		parent::__construct();
		$this->setSeparator("\t");
	}

	/**
	 * Computes the dataTable output and returns the string/binary
	 *
	 * @return string
	 */
	function render()
	{
		return parent::render();
	}
}
